import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Databinding2Component } from './databinding2.component';

describe('Databinding2Component', () => {
  let component: Databinding2Component;
  let fixture: ComponentFixture<Databinding2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Databinding2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Databinding2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
