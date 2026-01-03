import { Component, input } from '@angular/core';

import { ProductCard } from '../product-card/product-card';
import { ICategory, IProduct } from '../../../types';
import { MockProducts, Categories } from '../../mockdata';

@Component({
  selector: 'content-grid',
  imports: [ProductCard],
  template: `
    <span class="content-spacer"></span>
    <div id="content-grid">
      <!-- <span class="content-spacer"></span> -->
      <!-- <table>
        <tr>
        @for (product of products; track $index ){
        
          <td>
            <product-card [productInfo]=" products[$index]"></product-card>
          </td>
        }
        </tr>
      </table> -->
      @for (product of products; track $index ){
            <product-card [productInfo]=" products[$index]"></product-card>
        }
      <!-- <span class="content-spacer"></span> -->
    </div> 
    `
  ,
  styleUrl: './content-grid.css',
})

export class ContentGrid {
  products: IProduct[] = MockProducts;
}
