import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewDelhiComponent } from '../new-delhi/new-delhi.component';
import { NewMumbaiComponent } from '../new-mumbai/new-mumbai.component';



@NgModule({
  declarations: [ //contains components
    NewDelhiComponent,
    NewMumbaiComponent
  ],
  imports: [ //import is used for imprting entire Module not the component.
    CommonModule //CommonModule contains functionalities of one-way data binding, two-way data binding
  ],
  exports: [  //I am exporting these two outside world..Out of 10 components I want to give only 5 components to access outside then we will specify here.
    NewDelhiComponent,
    NewMumbaiComponent
  ]
})
export class IndiaModuleModule { } //Module is already exported we can use it anywhere
