import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IfdemoComponent } from './ifdemo/ifdemo.component';
import { FordemoComponent } from './fordemo/fordemo.component';
import { TrackByComponent } from './track-by/track-by.component';
import { ArrayIndexComponent } from './array-index/array-index.component';
import { FormsModule } from '@angular/forms';
import { SwitchdemoComponent } from './switchdemo/switchdemo.component';
import { SearchComponent } from './search/search.component';
import { ConditionComponent } from './condition/condition.component';

@NgModule({
  declarations: [
    AppComponent,
    IfdemoComponent,
    FordemoComponent,
    TrackByComponent,
    ArrayIndexComponent,
    SwitchdemoComponent,
    SearchComponent,
    ConditionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ConditionComponent]
})
export class AppModule { }
