import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCartItem } from './product-cart-item';

describe('ProductCartItem', () => {
  let component: ProductCartItem;
  let fixture: ComponentFixture<ProductCartItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCartItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCartItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
