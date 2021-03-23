import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IfdemoComponent } from './ifdemo/ifdemo.component';
import { FordemoComponent } from './fordemo/fordemo.component';
import { TrackByComponent } from './track-by/track-by.component';

@NgModule({
  declarations: [
    AppComponent,
    IfdemoComponent,
    FordemoComponent,
    TrackByComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [TrackByComponent]
})
export class AppModule { }
