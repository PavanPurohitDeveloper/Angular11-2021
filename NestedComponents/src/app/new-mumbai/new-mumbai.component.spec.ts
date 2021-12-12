import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMumbaiComponent } from './new-mumbai.component';

describe('NewMumbaiComponent', () => {
  let component: NewMumbaiComponent;
  let fixture: ComponentFixture<NewMumbaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewMumbaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMumbaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
