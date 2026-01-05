import { Component, input } from '@angular/core';

import { ProductCard } from '../product-card/product-card';
import { ICategory, IProduct } from '../../../types';
import { MockProducts, Categories } from '../../mockdata';

@Component({
  selector: 'content-grid',
  imports: [ProductCard],
  template: `
    <!-- <span class="content-spacer"></span> -->
    <!-- <div id="content-grid"> -->
    <!-- <div data-bs-theme="dark"> -->
      <div class="container-fluid">
        <div class="row">
          @for (product of products(); track $index ){
          <div class="col-sm-2" style= "padding:0;margins:0">
            <product-card [productInfo]="products()[$index]"></product-card>
          </div>
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
  // products : IProduct[] = this._products()();
  colStyle:string = "padding:0;margins:0";
}
