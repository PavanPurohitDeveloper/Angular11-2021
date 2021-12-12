import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDelhiComponent } from './new-delhi.component';

describe('NewDelhiComponent', () => {
  let component: NewDelhiComponent;
  let fixture: ComponentFixture<NewDelhiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDelhiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDelhiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
