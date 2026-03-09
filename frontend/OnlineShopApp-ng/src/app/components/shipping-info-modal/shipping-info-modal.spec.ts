import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingInfoModal } from './shipping-info-modal';

describe('ShippingInfoModal', () => {
  let component: ShippingInfoModal;
  let fixture: ComponentFixture<ShippingInfoModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShippingInfoModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShippingInfoModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
