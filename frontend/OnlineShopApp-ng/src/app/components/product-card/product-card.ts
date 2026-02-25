import { Component, inject, input, output } from '@angular/core';
import { MatButton } from '@angular/material/button';
import {
  MatCard,
  MatCardHeader,
  MatCardTitle,
  MatCardSubtitle,
  MatCardActions,
  MatCardContent,
  MatCardFooter,
  MatCardImage,
  MatCardMdImage,
} from '@angular/material/card';
import { MatExpansionModule, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatAccordion } from '@angular/material/expansion'
import { MatGridTile } from '@angular/material/grid-list';
import { MatIcon, MatIconRegistry } from '@angular/material/icon';
import { IProduct, IUser } from '../../../types';
import { CurrencyPipe } from '@angular/common';

import { ProductAPI } from '../../services/productAPI';
import { UserAPI } from '../../services/userAPI';

@Component({
  selector: 'product-card',
  imports: [MatCard, MatCardHeader, MatCardContent, MatIcon, MatButton, CurrencyPipe, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatAccordion],
  template: `
    <!-- <mat-grid-tile> -->
    <div class="card-wrapper">
    <mat-card class="card">
      <mat-card-header>
        <div mat-card-avatar class="example-header-image"></div>
      </mat-card-header>
      
      <mat-accordion multi="false">
        <mat-expansion-panel id="details-exp-panel" hideToggle [expanded]="!this.detailsToggled">
           <img style="height: 11rem;margin:-1.4rem;margin-top: 0;margin-bottom: 1rem;"
              mat-card-image
              src="https://material.angular.dev/assets/img/examples/shiba2.jpg"
              alt="Photo of a Shiba Inu"
            />
        </mat-expansion-panel>
      </mat-accordion>
      
       
      
      <mat-card-content>
        
        <!-- <mat-card-title>{{productInfo().title}}</mat-card-title> -->
        <p class="card-title">{{ productInfo().title }}</p>
        
        <mat-expansion-panel hideToggle id="details-exp-panel" style="margin-bottom: 0.5rem;">
        <div id="product-details">{{ productInfo().description }}</div>
          
        <mat-expansion-panel-header (click)="handleDetailsToggle()">
          <mat-panel-title style="margin-left: auto;margin-right: auto;">
            @if(detailsToggled==true){<mat-icon>expand_more</mat-icon>}
            @else{<mat-icon>expand_less</mat-icon>}
          </mat-panel-title>
        </mat-expansion-panel-header>
        </mat-expansion-panel>

        
        <p style="margin-bottom: 0.1rem; font-size:1rem">
          <span style="color: rgb(253, 127, 53);">{{
            productInfo().price | currency: 'RON '
          }}</span>
        </p>
        <p style="margin-bottom: 1rem;">
          <span style="color:rgb(255, 255, 143);">{{ productInfo().rating }} /5</span>
        </p>
      </mat-card-content>

      <span style="min-height: 0.1rem;"></span>
      <div class="container-fluid" [style]="addStyles([autoMargins])">
        <div class="row" style="margin-bottom: 1rem;">
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
        <div class="row" style="margin-bottom: 1rem;">
          <div class="col-sm-6" [style]="addStyles([autoMargins])">
            <button matButton class="card-action-btn" (click)="toggleFavorite()">
              @if (favorite == '') {
                <mat-icon fontIcon="favorite"></mat-icon>
              } @else {
                <mat-icon class="favorite-set" fontIcon="favorite"></mat-icon>
              }
            </button>
          </div>
          <div class="col-sm-6" [style]="addStyles([autoMargins])">
            <button matButton><mat-icon>share</mat-icon></button>
          </div>
        </div>
      </div>
    </mat-card></div>
    <!-- </mat-grid-tile> -->
  `,
  styleUrl: './product-card.css',
})
export class ProductCard {
  productApi = inject(ProductAPI);
  productInfo = input.required<IProduct>();
  userInfo = input.required<IUser>();
  openProductPage = output<IProduct>();
  detailsToggled:boolean = false;

  favorite: string = '';
  inCart: string = '';

  padd0: string = 'padding:0;';
  border: string = 'border:1px solid;';
  autoMargins: string = 'margin-left:auto;margin-right:auto;';
  autoPadd: string = 'padding:auto;';
  center: string = 'padding:auto;';

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
    // console.log('toggle favorite prevstate: ' + this.favorite);
    // console.log('toggle favorite product id: ' + JSON.stringify(this.productInfo()));
    // console.log('toggle favorite user id: ' + JSON.stringify(this.userInfo()));
    if (this.userInfo().id == '') {
      console.log('Sign in to add favorites');
      return;
    }

    if (this.favorite == '') this.favorite = 'favorite-set';
    else this.favorite = '';

    this.productApi.setFavorite(this.productInfo().id, this.userInfo().id).then((result) => {
      console.log('setFavorite result: ' + result);
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

  handleProductClick(){
    console.log("Clicked on " + this.productInfo().title);
    this.openProductPage.emit(this.productInfo());
  }

  handleDetailsToggle(){
    
    this.detailsToggled = this.detailsToggled?false:true;
    console.log("details toggled("+this.detailsToggled+") for "+this.productInfo().title)
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

