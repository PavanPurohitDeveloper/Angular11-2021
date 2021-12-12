import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndiaModuleModule } from './india-module/india-module.module';
import { IndiaComponent } from './india/india.component';
import { UsaModuleModule } from './usa-module/usa-module.module';
import { USAComponent } from './usa/usa.component';

@NgModule({
  declarations: [
    AppComponent,
    IndiaComponent,
    USAComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IndiaModuleModule,
    UsaModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
