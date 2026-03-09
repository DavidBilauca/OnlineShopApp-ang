import { Component, inject, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { IProduct, IUser } from '../../../types';
import { MatCard, MatCardHeader, MatCardContent } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { ProductAPI } from '../../services/productAPI';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'product-list-format',
  imports: [MatCard, MatButton, MatCardHeader, MatCardContent, MatIcon, CurrencyPipe],
  template: `
    <!-- <mat-grid-tile> -->
    @defer (on viewport; when inputsLoaded) {
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
            <div class="col" id="content-col">
              <mat-card-content>
                <p class="card-title">{{ productInfo().title }}</p>
                <p id="product-details">
                  {{ productInfo().description }}
                </p>
                <p id="price"> {{productInfo().price | currency: 'RON '}}
                </p>
                <p id="rating">
                  Rating:
                  <span>{{ productInfo().rating }} /5</span>
                </p>
              </mat-card-content>
            </div>
            <div class="col">
              <div class="container-fluid" [style]="addStyles([autoMargins])">
                <div class="row" [style]="addStyles([autoPadd, autoMargins, fitWidth])">
                  <button matButton (click)="toggleFavorite()">
                    @if (favorite == '') {
                      <mat-icon fontIcon="favorite"></mat-icon>
                    } @else {
                      <mat-icon class="favorite-set" fontIcon="favorite"></mat-icon>
                    }
                  </button>
                </div>
                <div class="row" [style]="addStyles([autoPadd, autoMargins, fitWidth])">
                  <span style="height: 0.5rem;"></span>
                </div>
                <div class="row" [style]="addStyles([autoPadd, autoMargins, fitWidth])">
                  <button matButton><mat-icon>share</mat-icon></button>
                </div>
                <div class="row" [style]="addStyles([autoPadd, autoMargins, fitWidth])">
                  <span style="min-height: 3rem;height: 5rem;"></span>
                </div>
                <div class="row" [style]="addStyles([autoPadd, autoMargins, fitWidth])">
                  @if (inCart == '') {
                    <button matButton="outlined" [style]="addStyles([border])" (click)="toggleCartItem()">
                      <mat-icon fontIcon="add_shopping_cart"></mat-icon>
                    </button>
                  } @else {
                    <button
                      matButton="filled"
                      [style]="addStyles([border])"
                      (click)="toggleCartItem()"
                    >
                      <mat-icon fontIcon="add_shopping_cart"></mat-icon>
                    </button>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </mat-card>
    } @placeholder {
      <p></p>
    } @loading {
      <p>Loading content</p>
    }
    <!-- </mat-grid-tile> -->
  `,
  styleUrl: './product-list-format.css',
})
export class ProductListFormat extends ProductCard {
  fitWidth: string = 'width:auto;';
  inputsLoaded:boolean = false;

  ngOnInit() {
    //console.log("Product list format: "+JSON.stringify(this.productInfo()));
    this.inputsLoaded = true;
  }


}
