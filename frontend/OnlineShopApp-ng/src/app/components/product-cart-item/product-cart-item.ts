import { Component, inject, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { IListItem, IProduct, IUser } from '../../../types';
import { MatCard, MatCardHeader, MatCardContent } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatButton, MatMiniFabButton } from '@angular/material/button';
import { ProductAPI } from '../../services/productAPI';

@Component({
  selector: 'product-cart-item',
  imports: [MatCard, MatButton, MatCardHeader, MatCardContent, MatIcon, CurrencyPipe, MatMiniFabButton],
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
            <div class="col">
              <mat-card-content>
                <p class="card-title">{{ productInfo().product.title }}</p>
                <p id="product-details">
                  {{ productInfo().product.description }}
                </p>
                <p id="price">
                  <span >{{
                    productInfo().product.price | currency: 'RON '
                  }}</span>
                </p>
                <p id="rating">
                  Rating:
                  <span>{{ productInfo().product.rating }} /5</span>
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
                  <span style="min-height: 2rem;height: 2rem;"></span>
                </div>
                <div class="row">
                  <div class="col">
                  <div class="btn-group" id="quantity-btn-group">
                    <button matButton type="button" class="btn" (click)="handleSubtract(productInfo())">
                      <mat-icon>remove</mat-icon>
                    </button>
                    <input
                      type="text"
                      (value)="productInfo().quantity"
                      [defaultValue]="productInfo().quantity"
                      class="quantityDisplay"
                    />
                    <button matButton type="button" class="btn" (click)="handleAdd(productInfo())">
                      <mat-icon>add</mat-icon>
                    </button>
                  </div>
                  </div>
                </div>
              </div>
              <div class="row" [style]="addStyles([autoPadd, autoMargins, fitWidth])">
                
                  @if (inCart == '') {
                    <button matButton="outlined"  (click)="toggleCartItem()">
                    <mat-icon fontIcon="add_shopping_cart"></mat-icon>
                    </button>
                  } @else {
                    <button matButton="filled"  (click)="toggleCartItem()">
                    <mat-icon fontIcon="add_shopping_cart"></mat-icon>
                    </button>
                  }
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
  styleUrl: './product-cart-item.css',
})
export class ProductCartItem {
  productsApi = inject(ProductAPI);
  productInfo = input.required<IListItem>();
  userInfo = input.required<IUser>();
  favorite: string = '';
  inCart: string = '';
  inputsLoaded: boolean = false;

  padd0: string = 'padding:0;';
  border: string = 'border:1px solid;';
  autoMargins: string = 'margin-left:auto;margin-right:auto;margin-bottom:2rem';
  autoPadd: string = 'padding:auto;';
  fitWidth: string = 'width:auto;';
  center: string = 'padding:auto;';

  ngOnInit() {
    //console.log("Product list format: "+JSON.stringify(this.productInfo()));
    this.inputsLoaded = true;
  }

  ngOnChanges() {
    if (
      this.userInfo().favorites.filter((fav) => fav.id == this.productInfo().product.id).length > 0
    ) {
      console.log('Product card: ' + this.productInfo().product.title + ' is set to fav');
      this.favorite = 'favorite-set';
    }
    if (
      this.userInfo().shoppingCart.filter(
        (cartItem) => cartItem.product.id == this.productInfo().product.id,
      ).length > 0
    ) {
      console.log('Product card: ' + this.productInfo().product.title + ' is added to cart');
      this.inCart = 'in-cart';
    }
  }

  handleSubtract(item: IListItem) {
    item.quantity -= 1;
    this.productsApi.updateQuantity(item.id, item.quantity);
    this.ngOnInit();
  }
  handleAdd(item: IListItem) {
    item.quantity += 1;
    this.productsApi.updateQuantity(item.id, item.quantity);
    this.ngOnInit();
  }

  toggleFavorite() {
    if (this.userInfo().id == '') {
      console.log('Sign in to add favorites');
      return;
    }

    if (this.favorite == '') this.favorite = 'favorite-set';
    else this.favorite = '';

    this.productsApi.setFavorite(this.productInfo().id, this.userInfo().id).then((result) => {
      console.log('setFavorite result: ' + result);
      if (result) this.favorite = 'favorite-set';
      else this.favorite = '';
    });
  }

  toggleCartItem() {
    if (this.userInfo().id == '') {
      console.log('Sign in to add products to cart');
      return;
    }
    if (this.inCart == '') this.inCart = 'in-cart';
    else this.inCart = '';
    this.productsApi.toggleCartItem(this.productInfo().id, this.userInfo().id).then((result) => {
      console.log('toggleCartItem result: ' + result);
      if (result) this.inCart = 'in-cart';
      else this.inCart = '';
    });
  }

  addStyles = (args: Array<string>) => {
    var result = '';
    args.forEach((arg) => (result = result.concat(arg)));
    return result;
  };
  testStyle = () => {
    return this.padd0.concat(this.border);
  };
}
