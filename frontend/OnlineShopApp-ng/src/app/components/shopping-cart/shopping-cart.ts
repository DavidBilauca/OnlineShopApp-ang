import { Component, computed, inject, input, output, signal } from '@angular/core';
import { Filters, IListItem, IProduct, IUser } from '../../../types';
import { ProductListFormat } from '../product-list-format/product-list-format';
import { ProductCard } from '../product-card/product-card';
import { MatIcon } from '@angular/material/icon';
import { MatAnchor, MatMiniFabButton } from '@angular/material/button';
import { ProductAPI } from '../../services/productAPI';
import { CurrencyPipe, JsonPipe } from '@angular/common';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { ProductCartItem } from "../product-cart-item/product-cart-item";
import { ChangeDetectorRef } from '@angular/core';

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
    CurrencyPipe,
    ProductCartItem
],
  template: `
    <div class="container-fluid">
      <div class="row">
        <div class="row">
          <div class="column-sm-1">
            <h4>Shopping cart</h4>
          </div>
          <div class="column-sm-1">
            <p>Showing: {{ _items().length }} of {{ _items().length }} products</p>
          </div>
        </div>
      </div>
      <div class="row">
        @defer (on viewport; when inputsLoaded) {
          @for (item of _items(); track $index) {
            <div class="row" style="padding:0;margins:0">
              <div class="col-lg-10">
                <product-cart-item
                  [productInfo]="items()[$index].product"
                  [listItemInfo]="items()[$index]"
                  [userInfo]="userInfo()"
                  (updateCartList)="handleToggleCartItem($event)"
                ></product-cart-item>
              </div>
            </div>
          }
        } @placeholder {
          <h1>No products in the cart, time to go shopping!</h1>
        } @loading (minimum 1s) {
          <h1>Loading...</h1>
        }
        <div class="row">
          <div class="col-lg-10">
        <mat-card class="card" style="min-height: 4rem; margin-bottom:5rem">
          <mat-card-content >
            <h4>Total: {{calculateTotal() | currency:"RON " }}</h4>
          </mat-card-content>
        </mat-card>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './shopping-cart.css',
})
export class ShoppingCart {
  productsAPI = inject(ProductAPI);
  items =  input.required<Array<IListItem>>();
  _items = signal<Array<IListItem>>([]) ;

  refetchUserData = output<void>();
  //inputsLoaded:boolean = false;

  //filters = input.required<Filters>();
  userInfo = input.required<IUser>();
  colStyle: string = 'padding:0;margins:0';
  productViewStyle: ViewStyle = ViewStyle.List;
  inputsLoaded: boolean = false;

  private cdr = inject(ChangeDetectorRef);

  ngOnInit() {
    this.inputsLoaded = true;
    this._items.set(this.items());
    //this.items().forEach(item=>console.log("ShoppingCart Item: "+JSON.stringify(item)));
  }

  handleRefetch(){
    this.refetchUserData.emit();
  }

  handleToggleCartItem(productId:string) {
    //this.cdr.detectChanges();
    this._items.set(this._items().filter(item=>item.product.id!=productId)) ;
  }



  viewStyleGrid = () => {
    return this.productViewStyle == ViewStyle.Grid;
  }; 

  calculateTotal(){
    const total = this._items()
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
