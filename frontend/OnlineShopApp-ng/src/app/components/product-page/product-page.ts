import { Component, inject, input } from '@angular/core';
import { IProduct, IUser } from '../../../types';
import { ProductAPI } from '../../services/productAPI';
import { MatIcon } from '@angular/material/icon';
import { CurrencyPipe } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatCard } from "@angular/material/card";

@Component({
  selector: 'product-page',
  imports: [MatIcon, CurrencyPipe, MatButton, MatCard],
  template: `
  <div class="container-fluid"><div class="row"><div class="col-lg-12"><mat-card id="product-page-card">
    <div class="row">
      <div class="col">
        <h3>{{productInfo().title}}</h3>
        <img mat-card-image src="https://material.angular.dev/assets/img/examples/shiba2.jpg" alt="Photo of a Shiba Inu"/>
      </div>
      <div class="col">
        <p>{{productInfo().description}}</p>
        <p id="price">
          <span >{{productInfo().price | currency: 'RON '}}</span>
        </p>
        <p id="rating">Rating:<span>{{ productInfo().rating }} /5</span></p>
        <div class="row">
        <button matButton class="card-action-btn" (click)="toggleFavorite()">
          @if (favorite == '') {
            <mat-icon fontIcon="favorite"></mat-icon>
          } @else {
            <mat-icon class="favorite-set" fontIcon="favorite"></mat-icon>
          }
        </button>
          <button matButton style="width: 1.5rem;"><mat-icon>share</mat-icon></button>
        @if (inCart == '') {
          <button matButton="outlined"  (click)="toggleCartItem()">
            <mat-icon fontIcon="add_shopping_cart"></mat-icon>
          </button>
        } @else {
          <button matButton="filled"  (click)="toggleCartItem()">
            <mat-icon fontIcon="add_shopping_cart"></mat-icon>
          </button>
        }
        </div>
      </div>
      <div class="col">
        
      </div>
        
        </div>
  </mat-card></div></div></div>
  `,
  styleUrl: './product-page.css',
})
export class ProductPage {
  productsApi = inject(ProductAPI);
  productInfo = input.required<IProduct>();
  userInfo = input.required<IUser>();
  favorite: string = '';
  inCart: string = '';

  padd0: string = 'padding:0;';
  border: string = 'border:1px solid;';
  autoMargins: string = 'margin-left:auto;margin-right:auto;';
  autoPadd: string = 'padding:auto;';
  center: string = 'padding:auto;';

  toggleFavorite() {
    if (this.userInfo().id == '') {
      console.log('Sign in to add favorites');
      return;
    }

    if (this.favorite == '') this.favorite = 'favorite-set';
    else this.favorite = '';

    this.productsApi.setFavorite(this.productInfo().id, this.userInfo().id).then((result) => {
      console.log('setFavorite result: ' + result);
      if (result) this.favorite = 'favorite-set';
      else this.favorite = '';
    });
  }

  toggleCartItem() {
    if (this.userInfo().id == '') {
      console.log('Sign in to add products to cart');
      return;
    }
    if (this.inCart == '') this.inCart = 'in-cart';
    else this.inCart = '';
    this.productsApi.toggleCartItem(this.productInfo().id, this.userInfo().id).then((result) => {
      console.log('toggleCartItem result: ' + result);
      if (result) this.inCart = 'in-cart';
      else this.inCart = '';
    });
  }

  addStyles = (args: Array<string>) => {
    var result = '';
    args.forEach((arg) => (result = result.concat(arg)));
    return result;
  };

  testStyle = () => {
    return this.padd0.concat(this.border);
  };
}
