import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfdemoComponent } from './ifdemo.component';

describe('IfdemoComponent', () => {
  let component: IfdemoComponent;
  let fixture: ComponentFixture<IfdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IfdemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IfdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
