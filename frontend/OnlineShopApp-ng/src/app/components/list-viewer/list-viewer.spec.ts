import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListViewer } from './list-viewer';

describe('ListViewer', () => {
  let component: ListViewer;
  let fixture: ComponentFixture<ListViewer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListViewer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListViewer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
