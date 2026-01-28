import { Component,inject,input } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCard,MatCardHeader,MatCardTitle,MatCardSubtitle,MatCardActions,MatCardContent,MatCardFooter,MatCardImage, MatCardMdImage } from '@angular/material/card';
import { MatGridTile } from '@angular/material/grid-list';
import { MatIcon } from '@angular/material/icon';
import { IProduct } from '../../../types';
import { CurrencyPipe, } from '@angular/common';
import { toggleFavoriteAction } from '../../services/productActions';
import { ProductAPI } from '../../services/productAPI';
import { BidiModule } from "@angular/cdk/bidi";


@Component({
  selector: 'product-card',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatIcon,
    MatButton,
    CurrencyPipe,
    BidiModule
],
  template: `
    <!-- <mat-grid-tile> -->
<mat-card class="card">
    <mat-card-header>
        <div mat-card-avatar class="example-header-image"></div>

    </mat-card-header>
    <img mat-card-image src="https://material.angular.dev/assets/img/examples/shiba2.jpg" alt="Photo of a Shiba Inu">
    <mat-card-content>
        <!-- <mat-card-title>{{productInfo().title}}</mat-card-title> -->
         <p class="card-title">{{productInfo().title}}</p>
        <p id="product-details">
            {{productInfo().description}}
        </p>
        <h5 style="margin-bottom: 1rem;">
            <span style="color: rgb(253, 127, 53);">{{ productInfo().price | currency:"RON "}}</span>
        </h5>
        <h6 style="margin-bottom: 1rem;">
            <span style="color:rgb(255, 255, 143);">{{productInfo().rating}} /5</span>
        </h6>
    </mat-card-content>
    <span style="min-height: 3rem;"></span>
    <div class="container-fluid" [style]="addStyles([autoMargins])">
        <div class="row" style="margin-bottom: 1rem;">
            <!-- <div class="col" [style]="addStyles([padd0,autoMargins,autoPadd,border])"> -->
                <button matButton [style]="addStyles([border])"><mat-icon>add_shopping_cart</mat-icon></button>
            <!-- </div> -->
        </div>
        <div class="row" style="margin-bottom: 1rem;">

            <div class="col-sm-6" [style]="addStyles([autoPadd,autoMargins])">
                <button matButton (action)="toggleFavorite()"><mat-icon svgIcon="assets:favoriteTrue"></mat-icon></button>
            </div>
            <div class="col-sm-6" [style]="addStyles([autoPadd,autoMargins])">
                <button matButton><mat-icon>share</mat-icon></button>
            </div>
        </div>
    </div>
</mat-card>
<!-- </mat-grid-tile> -->
  `,
  styleUrl: './product-card.css',
})
export class ProductCard {
  productApi = inject(ProductAPI);
  productInfo = input.required<IProduct>();
  favorite:boolean = false;

  padd0:string = "padding:0;";
  border:string = "border:1px solid;"
  autoMargins:string="margin-left:auto;margin-right:auto;";
  autoPadd:string="padding:auto;";
  center:string="padding:auto;";

  toggleFavorite(){
    toggleFavoriteAction(this.productApi,this.productInfo().id).then(result=>{
      
    })
  }

  addStyles = (args:Array<string>) =>{
    var result = "";
    args.forEach(arg=>result = result.concat(arg));
    return result;
  }
  testStyle = ()=>{
    return this.padd0.concat(this.border);
  }
}
