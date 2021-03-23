import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IfdemoComponent } from './ifdemo/ifdemo.component';
import { FordemoComponent } from './fordemo/fordemo.component';
import { TrackByComponent } from './track-by/track-by.component';
import { ArrayIndexComponent } from './array-index/array-index.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    IfdemoComponent,
    FordemoComponent,
    TrackByComponent,
    ArrayIndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ArrayIndexComponent]
})
export class AppModule { }
