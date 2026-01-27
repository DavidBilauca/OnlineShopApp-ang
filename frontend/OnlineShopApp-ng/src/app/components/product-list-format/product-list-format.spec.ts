import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListFormat } from './product-list-format';

describe('ProductListFormat', () => {
  let component: ProductListFormat;
  let fixture: ComponentFixture<ProductListFormat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductListFormat]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductListFormat);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
