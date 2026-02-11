import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../header/header';
import { ContentGrid } from '../content-grid/content-grid';
import { SideNav } from '../side-nav/side-nav';
import {Filters, ICategory, IProduct, IUser } from '../../../types';
import { Categories, MockProducts } from '../../mockdata';
import { NgOptimizedImage } from '@angular/common';
import { ProductAPI } from '../../services/productAPI';
import { CategoryAPI } from '../../services/categoryAPI';
import { UserAPI } from '../../services/userAPI';
import { ListViewer } from "../list-viewer/list-viewer";
import { D } from '@angular/cdk/keycodes';
import { ShoppingCart } from "../shopping-cart/shopping-cart";

// import {} from '../../assets'

@Component({
  selector: 'home',
  imports: [RouterOutlet, Header, ContentGrid, SideNav, NgOptimizedImage, ListViewer, ShoppingCart],
  template: `
    <main>
      <div class="hero">
        <img
          [ngSrc]="'/assets/doodleBG.jpg'"
          class="img-fluid"
          height="{{ 100 }}"
          width="{{ 100 }}"
          alt="hero img missing"
          priority
        />
      </div>

      <app-header [userInfo]="defaultUser" [activePage]="this.displayedPage" (renderFavorites)="renderFavorites($event)" (renderShoppingCart)="renderShoppingCart($event)" (renderHomePage)="renderHomePage($event)"/>
      <div class="container-flex" >
        <div class="row">
          <div class="col-lg-12"></div>
        </div>
        <div class="row">
          <div class="col-sm-2" >
            <side-nav [categories]="categories" (toggleEvent)="setFilters($event)" />
          </div>
          @if(displayHome()){
            <div class="col-lg-8">
              <content-grid [products]="products" [filters]="filters" [userInfo]="defaultUser" />
            </div>
          }
          @if(displayFavorites()){
            <div class="col-lg-8">
              <list-viewer [items]="this.defaultUser.favorites" [filters]="filters" [userInfo]="defaultUser" />
            </div>
          }
          @if(displayShoppingCart()){
            @defer(when inputsLoaded){
            <div class="col-lg-9">
              <shopping-cart [items]="this.defaultUser.shoppingCart" [userInfo]="defaultUser"/>
            </div>
            }
            
          }
          
          <div class="col-sm-2"></div>
        </div>
      </div>
    </main>
    <router-outlet />
  `,
  styleUrl: './home.css',
})
export class Home {
  productAPIService = inject(ProductAPI);
  categoryAPIService = inject(CategoryAPI);
  userAPIService = inject (UserAPI);

  defaultUser :IUser;

  products: IProduct[] = [];
  favorites:IProduct[]=[];
  categories: ICategory[] = []; 
  filters: Filters = {categories:[],viewMode:""};

  inputsLoaded:boolean= false;
  displayedPage: DisplayedPage = DisplayedPage.Home;
  displayHome = () => this.displayedPage == DisplayedPage.Home;
  displayFavorites = () => this.displayedPage == DisplayedPage.Favorites;
  displayShoppingCart = () => this.displayedPage == DisplayedPage.ShoppingCart;

  constructor () {
    const nullUser: IUser = {
      id:"",
      email:"",
      username:"",
      favorites:[],
      shoppingCart:[]
    };

    this.defaultUser = nullUser;
    //!!! update backend to retrieve the authenticated user after auth implementation
    this.userAPIService.getDefaultUser().then(result=>{
      if(result != null)
        this.defaultUser = result;

      this.userAPIService.getFavorites(this.defaultUser.id).then(result=>{
        this.defaultUser.favorites = result;
        //console.log(JSON.stringify(result));
      })

      this.userAPIService.getShoppingCartItems(this.defaultUser.id).then(result=>{
        this.defaultUser.shoppingCart = result;
        console.log(JSON.stringify(result));
      })

    });

    this.categoryAPIService.getAllCategories().then(result=>{
      this.categories = result;
      // console.log("home constructor: "+JSON.stringify(result));
    });
    this.productAPIService.getAllProducts().then(result=>{
      this.products = result;
      //console.log("home constructor: "+JSON.stringify(result.map(p=>p.id)));
    });
  }

  

    ngOnInit(){
      this.inputsLoaded = true;
    }

  setFilters = (event: { c: ICategory; state: boolean }) => {
    if (event.state) {
      //category is to be added and is not in the list
      if (!this.filters.categories.includes(event.c)) this.filters.categories.push(event.c);
    } else {
      //category is to be deleted and is in the list
      if (this.filters.categories.includes(event.c))
        this.filters.categories = this.filters.categories.filter((element) => element != event.c);
    }
  };

  renderHomePage(event:void){
    this.displayedPage= DisplayedPage.Home;
  }

  renderFavorites(event:void){
    this.displayedPage = DisplayedPage.Favorites;
  } 

  renderShoppingCart($event: void) {
    this.displayedPage = DisplayedPage.ShoppingCart;
  }
  

}
const enum DisplayedPage {
  Home,
  Favorites,
  Settings,
  Search,
  ShoppingCart
}
