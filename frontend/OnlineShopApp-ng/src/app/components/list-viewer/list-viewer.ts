import { Component, input } from '@angular/core';
import { Filters, IProduct, IUser } from '../../../types';
import { ProductListFormat } from "../product-list-format/product-list-format";
import { ProductCard } from "../product-card/product-card";
import { MatIcon } from "@angular/material/icon";
import { MatAnchor } from '@angular/material/button';

@Component({
  selector: 'list-viewer',
  imports: [ProductListFormat, MatIcon,MatAnchor],
  template: `
    <div class="container-fluid">
      <div class="row">
        <div class="row">
          <div class="column-sm-1">
            <h4>Favorites</h4>
          </div>
          <div class="column-sm-1">
            <p>Showing: {{items().length}} of {{items().length}} products</p>
          </div>
        </div>
      </div>
        <div class="row">
          @defer (on viewport) {
            @for (item of items(); track $index) {
              @if (emptyFilters() || isFiltered(item)) {
                <div class="row" style="padding:0;margins:0">
                  <product-list-format [productInfo]="items()[$index]" [userInfo]="userInfo()"></product-list-format>
                </div>
              }
            }
          } @placeholder {
            <h1>No products available, Try again later</h1>
          } @loading (minimum 1s) {
            <h1>Loading...</h1>
          }
        </div>
    </div>
  `,
  styleUrl: './list-viewer.css',
})
export class ListViewer {
  items = input.required<Array<IProduct>>();
  filters = input.required<Filters>();
  userInfo = input.required<IUser>();
  colStyle: string = 'padding:0;margins:0';
  productViewStyle: ViewStyle = ViewStyle.Grid;

  viewStyleGrid = () => {
    return this.productViewStyle == ViewStyle.Grid;
  };

  toggleViewStyle = () => {
    //this.productViewStyle+=1;
    if (this.productViewStyle == ViewStyle.List) this.productViewStyle = ViewStyle.Grid;
    else this.productViewStyle = ViewStyle.List;
    console.log('View style: ' + this.productViewStyle);
  };

  emptyFilters = () => {
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