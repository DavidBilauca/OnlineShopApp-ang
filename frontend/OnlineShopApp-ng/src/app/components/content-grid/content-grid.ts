import { Component, input, output } from '@angular/core';

import { ProductCard } from '../product-card/product-card';
import { Filters, ICategory, IProduct, IUser } from '../../../types';
import { MockProducts, Categories } from '../../mockdata';
import { JsonPipe } from '@angular/common';
import { ProductListFormat } from '../product-list-format/product-list-format';
import { MatAnchor } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'content-grid',
  imports: [ProductCard, ProductListFormat, MatAnchor, MatIcon],
  template: `
    <!-- <span class="content-spacer"></span> -->
    <!-- <div id="content-grid"> -->
    <!-- <div data-bs-theme="dark"> -->

    <div class="container-fluid">
      <div class="row">
        <!-- <div class="container-fluid" style="display: flex;"> -->
        <div class="row" style="display: flex;">
          <div class="column-sm-1" style="float: right;">
            <button matButton (click)="toggleViewStyle()">
              @if(viewStyleGrid()){<mat-icon id="larger-button">grid_on</mat-icon>}
              @else{<mat-icon id="larger-button">lists</mat-icon>}
            </button>
          </div>
          <div class="column-sm-1" style="float: right;">
            <p>Showing: {{products().length}} of {{products().length}} products</p>
          </div>
        </div>
        <!-- </div> -->
      </div>
      @if (viewStyleGrid()) {
        <div class="row">
          @defer (on viewport) {
            @for (product of products(); track $index) {
              @if (emptyFilters(product) || isFiltered(product)) {
                <!-- <div class="col-md-3" style="padding:0;margins:0">
          <product-card [productInfo]="products()[$index]"></product-card>
        </div> -->
                <div class="col-md-2" style="padding:0;margins:0">
                  <product-card [productInfo]="products()[$index]" [userInfo]="userInfo()" (openProductPage)="handleOpenProductPage($event)"></product-card>
                </div>
              }
            }
          } @placeholder {
            <h1>No products available, Try again later</h1>
          } @loading (minimum 1s) {
            <h1>Loading...</h1>
          }
        </div>
      } @else {
        <div class="row">
          @defer (on viewport) {
            @for (product of products(); track $index) {
              @if (emptyFilters(product) || isFiltered(product)) {
                <div class="row" style="padding:0;margins:0">
                  <product-list-format [productInfo]="products()[$index]" [userInfo]="userInfo()"></product-list-format>
                </div>
              }
            }
          } @placeholder {
            <h1>No products available, Try again later</h1>
          } @loading (minimum 1s) {
            <h1>Loading...</h1>
          }
        </div>
      }

      <!-- </div> -->
    </div>
    <!-- </div> -->
  `,
  styleUrl: './content-grid.css',
})
export class ContentGrid {
  products = input.required<Array<IProduct>>();
  filters = input.required<Filters>();
  userInfo = input.required<IUser>();

  openProductPage = output<IProduct>();

  colStyle: string = 'padding:0;margins:0';
  productViewStyle: ViewStyle = ViewStyle.Grid;


  handleOpenProductPage(product:IProduct){
    this.openProductPage.emit(product);
  }

  viewStyleGrid = () => {
    return this.productViewStyle == ViewStyle.Grid;
  };

  toggleViewStyle = () => {
    //this.productViewStyle+=1;
    if (this.productViewStyle == ViewStyle.List) this.productViewStyle = ViewStyle.Grid;
    else this.productViewStyle = ViewStyle.List;
    console.log('View style: ' + this.productViewStyle);
  };

  emptyFilters = (product: IProduct) => {
    //console.log("product card info: "+JSON.stringify(product));
    // console.log("filters: "+this.filters());
    // console.log("filters empty: "+ (this.filters().length == 0).toString());
    return this.filters().categories.length == 0;
  };

  isFiltered = (item: IProduct) => {
    return this.filters().categories
      .map((category) => category.id)
      .includes(item.categoryId);
  };
}

enum ViewStyle {
  Grid,
  List,
}
