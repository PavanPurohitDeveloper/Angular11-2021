import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewyorkComponent } from '../newyork/newyork.component';
import { WashingtonComponent } from '../washington/washington.component';



@NgModule({
  declarations: [
    NewyorkComponent,
    WashingtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NewyorkComponent,
    WashingtonComponent
  ]
})
export class UsaModuleModule { } //Module is already exported we can use it anywhere
