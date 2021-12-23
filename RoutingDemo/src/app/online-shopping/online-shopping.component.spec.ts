import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineShoppingComponent } from './online-shopping.component';

describe('OnlineShoppingComponent', () => {
  let component: OnlineShoppingComponent;
  let fixture: ComponentFixture<OnlineShoppingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineShoppingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineShoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
