import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { Databinding2Component } from './databinding2/databinding2.component';

@NgModule({
  declarations: [
    AppComponent,
    DatabindingComponent,
    Databinding2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [Databinding2Component]
})
export class AppModule { }
