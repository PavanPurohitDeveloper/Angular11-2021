import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FordemoComponent } from './fordemo.component';

describe('FordemoComponent', () => {
  let component: FordemoComponent;
  let fixture: ComponentFixture<FordemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FordemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FordemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
