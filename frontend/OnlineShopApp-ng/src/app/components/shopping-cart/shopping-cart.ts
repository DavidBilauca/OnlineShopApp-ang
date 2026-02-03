import { Component, inject, input } from '@angular/core';
import { Filters, IListItem, IProduct, IUser } from '../../../types';
import { ProductListFormat } from '../product-list-format/product-list-format';
import { ProductCard } from '../product-card/product-card';
import { MatIcon } from '@angular/material/icon';
import { MatAnchor } from '@angular/material/button';
import { ProductAPI } from '../../services/productAPI';

@Component({
  selector: 'shopping-cart',
  imports: [ProductListFormat, MatIcon, MatAnchor],
  template: `
    <div class="container-fluid">
      <div class="row">
        <div class="row">
          <div class="column-sm-1">
            <h4>Favorites</h4>
          </div>
          <div class="column-sm-1">
            <p>Showing: {{ items().length }} of {{ items().length }} products</p>
          </div>
        </div>
      </div>
      <div class="row">
        @defer (on viewport) {
          @for (item of items(); track $index) {
            <div class="row" style="padding:0;margins:0">
              <product-list-format
                [productInfo]="items()[$index].product"
                [userInfo]="userInfo()"
              ></product-list-format>
            </div>
            <button matButton (click)="handleAdd(items()[$index])"></button>
            <button matButton (click)="handleSubtract(items()[$index])"></button>
          }
        } @placeholder {
          <h1>No products in the cart, time to go shopping!</h1>
        } @loading (minimum 1s) {
          <h1>Loading...</h1>
        }
      </div>
    </div>
  `,
  styleUrl: './shopping-cart.css',
})
export class ShoppingCart {
  productsAPI = inject(ProductAPI);
  items = input.required<Array<IListItem>>();
  //filters = input.required<Filters>();
  userInfo = input.required<IUser>();
  colStyle: string = 'padding:0;margins:0';
  productViewStyle: ViewStyle = ViewStyle.List;

  viewStyleGrid = () => {
    return this.productViewStyle == ViewStyle.Grid;
  };

  handleSubtract(item:IListItem) {
    item.quantity -=1;
    this.productsAPI.updateQuantity(item.id,item.quantity);
  }
  handleAdd(item: IListItem) {
    item.quantity+=1;
    this.productsAPI.updateQuantity(item.id,item.quantity)
  }
}

enum ViewStyle {
  Grid,
  List,
}
