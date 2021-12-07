import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyeventdemoComponent } from './keyeventdemo.component';

describe('KeyeventdemoComponent', () => {
  let component: KeyeventdemoComponent;
  let fixture: ComponentFixture<KeyeventdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyeventdemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyeventdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
