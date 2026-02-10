import { Component, inject, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { IProduct, IUser } from '../../../types';
import { MatCard, MatCardHeader, MatCardContent } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { ProductAPI } from '../../services/productAPI';

@Component({
  selector: 'product-list-format',
  imports: [MatCard, MatButton, MatCardHeader, MatCardContent, MatIcon, CurrencyPipe],
  template: `
    <!-- <mat-grid-tile> -->
      @defer(on viewport;when inputsLoaded){
    <mat-card class="card">
      <mat-card-header>
        <div mat-card-avatar class="example-header-image"></div>
      </mat-card-header>
      <div class="container-flex">
        <div class="row">
          <div class="col">
            <img
              mat-card-image
              src="https://material.angular.dev/assets/img/examples/shiba2.jpg"
              alt="Photo of a Shiba Inu"
            />
          </div>
          <div class="col">
            <mat-card-content>
              <!-- <mat-card-title>{{productInfo().title}}</mat-card-title> -->
              <p class="card-title">{{ productInfo().title }}</p>
              <p id="product-details">
                {{ productInfo().description }}
              </p>
              <h5 style="margin-bottom: 1rem;">
                <span style="color: rgb(253, 127, 53);">{{
                  productInfo().price | currency: 'RON '
                }}</span>
              </h5>
              <h6 style="margin-bottom: 1rem;">
                <span style="color:rgb(255, 255, 143);">{{ productInfo().rating }} /5</span>
              </h6>
            </mat-card-content>
          </div>
          <div class="col">
            <div class="container-fluid" [style]="addStyles([autoMargins])">
              
              <div class="row" [style]="addStyles([autoPadd, autoMargins,fitWidth])">
                <button matButton (click)="toggleFavorite()">
                @if(favorite==''){<mat-icon  fontIcon="favorite"></mat-icon>}
                @else {<mat-icon class="favorite-set" fontIcon="favorite"></mat-icon>}
            </button>
              </div>
              <div class="row" [style]="addStyles([autoPadd, autoMargins,fitWidth])">
                <span style="height: 0.5rem;"></span>
              </div>
              <div class="row" [style]="addStyles([autoPadd, autoMargins,fitWidth])">
                <button matButton><mat-icon>share</mat-icon></button>
              </div>
              <div class="row" [style]="addStyles([autoPadd, autoMargins,fitWidth])">
                <span style="height: 8rem;"></span>
              </div>
              <div class="row" [style]="addStyles([autoPadd, autoMargins,fitWidth])">
                <button matButton [style]="addStyles([border])" (click)="toggleCartItem()">
                  @if(inCart==''){
              <mat-icon  fontIcon="add_shopping_cart"></mat-icon>
                  }@else {
              <mat-icon class="in-cart" fontIcon="add_shopping_cart"></mat-icon>
            }
          </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </mat-card>}
    @placeholder {
      <p></p>
    }
    @loading {
      <p>Loading content</p>
    }
    <!-- </mat-grid-tile> -->
  `,
  styleUrl: './product-list-format.css',
})
export class ProductListFormat {
  productApi = inject(ProductAPI);
  productInfo = input.required<IProduct>();
  userInfo = input.required<IUser>();
  favorite: string = '';
  inCart: string = '';
  inputsLoaded: boolean = false;
  
  padd0: string = 'padding:0;';
  border: string = 'border:1px solid;';
  autoMargins: string = 'margin-left:auto;margin-right:auto;margin-bottom:2rem';
  autoPadd: string = 'padding:auto;';
  fitWidth:string='width:auto;';
  center: string = 'padding:auto;';

  ngOnInit(){
    //console.log("Product list format: "+JSON.stringify(this.productInfo()));
    this.inputsLoaded=true;
  }

  ngOnChanges() {
    if (this.userInfo().favorites.filter((fav) => fav.id == this.productInfo().id).length > 0) {
      console.log('Product card: ' + this.productInfo().title + ' is set to fav');
      this.favorite = 'favorite-set';
    }
    if (this.userInfo().shoppingCart.filter((cartItem) => cartItem.productId == this.productInfo().id).length > 0) {
      console.log('Product card: ' + this.productInfo().title + ' is added to cart');
      this.inCart = 'in-cart';
    }
  }

  toggleFavorite() {
    if(this.userInfo().id == "") {
        console.log("Sign in to add favorites");
        return;
    }

    if(this.favorite == "") this.favorite="favorite-set";
    else  this.favorite="";

    this.productApi.setFavorite(this.productInfo().id, this.userInfo().id).then(result=>{
        console.log("setFavorite result: "+result);
        if (result) this.favorite = 'favorite-set';
             else this.favorite = '';
    });
  }

  toggleCartItem(){
    if (this.userInfo().id == '') {
      console.log('Sign in to add products to cart');
      return;
    }
    if (this.inCart == '') this.inCart = 'in-cart';
    else this.inCart = '';
    this.productApi.toggleCartItem(this.productInfo().id,this.userInfo().id).then((result)=>{
      console.log('toggleCartItem result: ' + result);
      if (result) this.inCart = 'in-cart';
      else this.inCart = '';
    })
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
