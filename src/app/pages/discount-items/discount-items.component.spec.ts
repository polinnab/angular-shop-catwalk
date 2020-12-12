import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountItemsComponent } from './discount-items.component';

describe('DiscountItemsComponent', () => {
  let component: DiscountItemsComponent;
  let fixture: ComponentFixture<DiscountItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscountItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscountItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
