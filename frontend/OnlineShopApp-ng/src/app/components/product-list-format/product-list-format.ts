import { Component, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { IProduct } from '../../../types';
import { MatCard, MatCardHeader, MatCardContent } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'product-list-format',
  imports: [MatCard, MatButton, MatCardHeader, MatCardContent, MatIcon, CurrencyPipe],
  template: `
    <!-- <mat-grid-tile> -->
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
                <button matButton><mat-icon>favorite</mat-icon></button>
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
                <button matButton [style]="addStyles([border])">
                  <mat-icon>add_shopping_cart</mat-icon>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </mat-card>
    <!-- </mat-grid-tile> -->
  `,
  styleUrl: './product-list-format.css',
})
export class ProductListFormat {
  productInfo = input.required<IProduct>();
  padd0: string = 'padding:0;';
  border: string = 'border:1px solid;';
  autoMargins: string = 'margin-left:auto;margin-right:auto;margin-bottom:2rem';
  autoPadd: string = 'padding:auto;';
  fitWidth:string='width:auto;';
  center: string = 'padding:auto;';

  addStyles = (args: Array<string>) => {
    var result = '';
    args.forEach((arg) => (result = result.concat(arg)));
    return result;
  };
  testStyle = () => {
    return this.padd0.concat(this.border);
  };
}
