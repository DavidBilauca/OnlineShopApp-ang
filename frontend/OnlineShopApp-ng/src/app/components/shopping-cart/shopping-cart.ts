import { Component, inject, input } from '@angular/core';
import { Filters, IListItem, IProduct, IUser } from '../../../types';
import { ProductListFormat } from '../product-list-format/product-list-format';
import { ProductCard } from '../product-card/product-card';
import { MatIcon } from '@angular/material/icon';
import { MatAnchor, MatMiniFabButton } from '@angular/material/button';
import { ProductAPI } from '../../services/productAPI';
import { CurrencyPipe, JsonPipe } from '@angular/common';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';

@Component({
  selector: 'shopping-cart',
  imports: [
    ProductListFormat,
    MatIcon,
    MatAnchor,
    MatMiniFabButton,
    MatCard,
    MatCardContent,
    MatCardActions,
    CurrencyPipe
  ],
  template: `
    <div class="container-fluid">
      <div class="row">
        <div class="row">
          <div class="column-sm-1">
            <h4>Shopping cart</h4>
          </div>
          <div class="column-sm-1">
            <p>Showing: {{ items().length }} of {{ items().length }} products</p>
          </div>
        </div>
      </div>
      <div class="row">
        @defer (on viewport; when inputsLoaded) {
          @for (item of items(); track $index) {
            <div class="row" style="padding:0;margins:0">
              <div class="col-lg-2">
                <mat-card class="card">
                  <mat-card-actions style="margin-top:auto;margin-bottom:auto;">
                    <div class="container">
                       <div class="row">
                          <button matButton class="quantityBtn" (click)="handleAdd(items()[$index])">
                            <mat-icon>add</mat-icon>
                          </button>
                        </div>
                        <div class="row">
                          <input type="text" (value)="item.quantity" [defaultValue]="item.quantity" class="quantityDisplay"/>
                        </div>
                        <div class="row">
                          <button matButton class="quantityBtn" (click)="handleSubtract(items()[$index])">
                            <mat-icon>remove</mat-icon>
                          </button>
                        </div>
                    </div>
                  </mat-card-actions>
                </mat-card>
              </div>

              <div class="col-lg-10">
                <product-list-format
                  [productInfo]="items()[$index].product"
                  [userInfo]="userInfo()"
                ></product-list-format>
              </div>
            </div>
          }
        } @placeholder {
          <h1>No products in the cart, time to go shopping!</h1>
        } @loading (minimum 1s) {
          <h1>Loading...</h1>
        }
        <mat-card class="card" style="min-height: 4rem; margin-bottom:5rem">
          <mat-card-content >
            <h4>Total: {{calculateTotal() | currency:"RON " }}</h4>
          </mat-card-content>
        </mat-card>
      </div>
    </div>
  `,
  styleUrl: './shopping-cart.css',
})
export class ShoppingCart {
  productsAPI = inject(ProductAPI);
  items = input.required<Array<IListItem>>();
  //inputsLoaded:boolean = false;

  //filters = input.required<Filters>();
  userInfo = input.required<IUser>();
  colStyle: string = 'padding:0;margins:0';
  productViewStyle: ViewStyle = ViewStyle.List;
  inputsLoaded: boolean = false;

  ngOnInit() {
    this.inputsLoaded = true;
    this.items().forEach(item=>console.log("ShoppingCart Item: "+JSON.stringify(item)));
  }

  viewStyleGrid = () => {
    return this.productViewStyle == ViewStyle.Grid;
  };

  handleSubtract(item: IListItem) {
    item.quantity -= 1;
    this.productsAPI.updateQuantity(item.id, item.quantity);
    this.ngOnInit();
  }
  handleAdd(item: IListItem) {
    item.quantity += 1;
    this.productsAPI.updateQuantity(item.id, item.quantity);
    this.ngOnInit();
  }
  calculateTotal(){
    const total = this.items()
    .reduce(
      (accumulator,currentVal)=>accumulator+currentVal.product.price*currentVal.quantity,
      0
    )
    return total;
  }
}

enum ViewStyle {
  Grid,
  List,
}
