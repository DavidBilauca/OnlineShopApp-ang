import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../header/header';
import { ContentGrid } from '../content-grid/content-grid';
import { SideNav } from '../side-nav/side-nav';
import { ICategory, IProduct } from '../../../types';
import { Categories, MockProducts } from '../../mockdata';
import { NgOptimizedImage } from '@angular/common';
import { ProductAPI } from '../../services/productAPI';

// import {} from '../../assets'

@Component({
  selector: 'home',
  imports: [RouterOutlet, Header, ContentGrid, SideNav, NgOptimizedImage],
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

      <app-header />
      <div class="container-flex" >
        <div class="row">
          <div class="col-lg-12"></div>
        </div>
        <div class="row">
          <div class="col-sm-2" >
            <side-nav [categories]="categories" (toggleEvent)="setFilters($event)" />
          </div>
          <div class="col-lg-8">
            <content-grid [products]="products" [filters]="productFilters" />
          </div>
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

  products: IProduct[] = [];
  categories: ICategory[] = Categories.getCategories();
  productFilters: ICategory[] = [];

  constructor () {
    this.productAPIService.getAllProducts().then(result=>{
      this.products = result;
    });
  }


  setFilters = (event: { c: ICategory; state: boolean }) => {
    if (event.state) {
      //category is to be added and is not in the list
      if (!this.productFilters.includes(event.c)) this.productFilters.push(event.c);
    } else {
      //category is to be deleted and is in the list
      if (this.productFilters.includes(event.c))
        this.productFilters = this.productFilters.filter((element) => element != event.c);
    }
  };
}
