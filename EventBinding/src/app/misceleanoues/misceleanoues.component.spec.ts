import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisceleanouesComponent } from './misceleanoues.component';

describe('MisceleanouesComponent', () => {
  let component: MisceleanouesComponent;
  let fixture: ComponentFixture<MisceleanouesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisceleanouesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MisceleanouesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
