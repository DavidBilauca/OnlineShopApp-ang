import { Component, input } from '@angular/core';

import { ProductCard } from '../product-card/product-card';
import { ICategory, IProduct } from '../../../types';
import { MockProducts, Categories } from '../../mockdata';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'content-grid',
  imports: [ProductCard],
  template: `
    <!-- <span class="content-spacer"></span> -->
    <!-- <div id="content-grid"> -->
    <!-- <div data-bs-theme="dark"> -->

    <div class="container-fluid">
      <div class="row">
        @defer (on viewport) {
           @for (product of products(); track $index ){
             
              @if(emptyFilters(product) || isFiltered(product.category)){

        <div class="col-md-3" style="padding:0;margins:0">
          <product-card [productInfo]="products()[$index]"></product-card>
        </div>
        } } } @placeholder {
        <h1>No products available, Try again later</h1>
        } @loading (minimum 1s) {
        <h1>Loading...</h1>
        }
      </div>
      <!-- </div> -->
    </div>
    <!-- </div> -->
  `,
  styleUrl: './content-grid.css',
})
export class ContentGrid {
  products = input.required<Array<IProduct>>();
  filters = input.required<ICategory[]>();
  // products : IProduct[] = this._products()();
  colStyle: string = 'padding:0;margins:0';

  emptyFilters = (product:IProduct) => {
    //console.log("product card info: "+JSON.stringify(product));
    // console.log("filters: "+this.filters());
    // console.log("filters empty: "+ (this.filters().length == 0).toString());
    return this.filters().length == 0;
  };

  isFiltered = (item: ICategory) => {
    return this.filters().includes(item);
  };
}
