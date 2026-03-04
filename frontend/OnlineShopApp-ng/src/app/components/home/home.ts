import { ChangeDetectorRef, Component, effect, inject, output, Signal, signal, viewChild } from '@angular/core';
import { Router, RouterOutlet, Scroll } from '@angular/router';
import { Header } from '../header/header';
import { ContentGrid } from '../content-grid/content-grid';
import { SideNav } from '../side-nav/side-nav';
import {Filters, ICategory, IProduct, IUser } from '../../../types';
import { Categories, MockProducts } from '../../mockdata';
import { NgOptimizedImage, ViewportScroller } from '@angular/common';
import { ProductAPI } from '../../services/productAPI';
import { CategoryAPI } from '../../services/categoryAPI';
import { UserAPI } from '../../services/userAPI';
import { ListViewer } from "../list-viewer/list-viewer";

import { MatDividerModule, MatDivider } from '@angular/material/divider';
import { ShoppingCart } from "../shopping-cart/shopping-cart";
import { ProductPage } from "../product-page/product-page";
import { Settings } from "../settings/settings";
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map } from 'rxjs';



// import {} from '../../assets'

@Component({
  selector: 'home',
  imports: [RouterOutlet, Header, ContentGrid, SideNav, NgOptimizedImage, ListViewer, ShoppingCart, ProductPage, Settings, MatDivider],
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

      <app-header [userInfo]="defaultUser" [activePage]="this.displayedPage" 
      (renderFavorites)="renderFavorites($event)" 
      (renderShoppingCart)="renderShoppingCart($event)" 
      (renderHomePage)="renderHomePage($event)"
      (renderAccountSettings)="renderAccountSettings($event)"/>
      <div class="container-flex" >
        <div class="row">
          <div class="col-lg-12"></div>
        </div>
        <div class="row">
          <!-- <div class="col-sm-2" >
            <side-nav [categories]="categories" (toggleEvent)="setFilters($event)" />
          </div> -->
          @if(displayHome()){
            <div class="col-lg-10" style="margin-left: auto;margin-right: auto;">
              <content-grid [products]="products" [filters]="filters" [userInfo]="defaultUser" (refetchUserData)="handleRefetch()" (openProductPage)="handleOpenProductPage($event)"/>
            </div>
          }
          @if(displayFavorites()){
            <div class="col-lg-10">
              <list-viewer [items]="this.defaultUser.favorites" [filters]="filters" [userInfo]="defaultUser" />
            </div>
          }
          @if(displayShoppingCart()){
            @defer(when inputsLoaded){
            <div class="col-lg-10">
              <shopping-cart [items]="this.defaultUser.shoppingCart" [userInfo]="defaultUser" (refetchUserData)="handleRefetch()"/>
            </div>
            }
          }
          @if(displayProductPage()){
             <div class="col-lg-10">
              <product-page [productInfo]="selectedProduct" [userInfo]="defaultUser"/>
            </div>
          }
          @if(displayAccountSettings()){
             <div class="col-lg-12">
              <settings [userInfo]="this.defaultUser"/>
            </div>
          }
          
          <!-- <div class="col-sm-2"></div> -->
        </div>
        <div class="row" style="margin-top: 1rem;min-height: 10rem;background-color: black;">
          <mat-divider/>
        </div>
      </div>
    </main>
    <router-outlet />
  `,
  styleUrl: './home.css',
})
export class Home {
  productApi = inject(ProductAPI);
  categoryApi = inject(CategoryAPI);
  userApi = inject (UserAPI);

  refetch = output<void>();

  defaultUser :IUser;
  
  selectedProduct: IProduct = nullProduct;

  products: IProduct[] = [];
  favorites:IProduct[]=[];
  categories: ICategory[] = []; 
  filters: Filters = {categories:[],viewMode:""};

  inputsLoaded:boolean= false;
  displayedPage: DisplayedPage = DisplayedPage.Home;

  displayHome = () => this.displayedPage == DisplayedPage.Home;
  displayFavorites = () => this.displayedPage == DisplayedPage.Favorites;
  displayShoppingCart = () => this.displayedPage == DisplayedPage.ShoppingCart;
  displayProductPage = () => this.displayedPage == DisplayedPage.Product;
  displayAccountSettings = () => this.displayedPage == DisplayedPage.Settings;

  
  private cdr = inject(ChangeDetectorRef);

  // viewportScroller = inject(ViewportScroller);
  // scrollingRef = viewChild<HTMLElement>('scrolling');
  
  constructor () {
    this.defaultUser = nullUser;
    //!!! update backend to retrieve the authenticated user after auth implementation
    this.refetchUserData();
    this.refetchProductData();
  }

  public handleRefetch(){
    console.log("refetch requested");
    this.refetchUserData();
    this.cdr.detectChanges()
  }

  public async refetchUserData() {
    this.userApi.getDefaultUser().then((result) => {
      if (result != null) this.defaultUser = result;

      this.userApi.getFavorites(this.defaultUser.id).then((result) => {
        this.defaultUser.favorites = result;
        //console.log(JSON.stringify(result));
      });

      this.userApi.getShoppingCartItems(this.defaultUser.id).then((result) => {
        this.defaultUser.shoppingCart = result;
        //console.log(JSON.stringify(result));
      });
    });
  }

  public async refetchProductData(){
    this.categoryApi.getAllCategories().then(result=>{
          this.categories = result;
          // console.log("home constructor: "+JSON.stringify(result));
        });
    this.productApi.getAllProducts().then(result=>{
          this.products = result;
          console.log("app context constructor: "+JSON.stringify(result.map(p=>p.id)));
        });
  }
  

  handleOpenProductPage(product:IProduct){
    this.selectedProduct = product;
    this.displayedPage = DisplayedPage.Product;
    
  }

    async ngOnInit(){
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

  renderAccountSettings($event:void) {
    this.displayedPage = DisplayedPage.Settings;
  }

}
const enum DisplayedPage {
  Home,
  Favorites,
  Settings,
  Search,
  ShoppingCart,
  Product
}

export const nullProduct:IProduct={
    id: '',
    title: '',
    price: 0,
    rating: 0,
    category: Categories.None,
    categoryId: ''
  }


export const nullUser: IUser = {
  id: '',
  email: '',
  username: '',
  favorites: [],
  shoppingCart: [],
};
