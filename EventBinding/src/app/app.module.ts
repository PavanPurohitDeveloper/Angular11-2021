import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KeyeventdemoComponent } from './keyeventdemo/keyeventdemo.component';
import { MouseEventsComponent } from './mouse-events/mouse-events.component';
import { MisceleanouesComponent } from './misceleanoues/misceleanoues.component';
import { OnlineshopComponent } from './onlineshop/onlineshop.component';

@NgModule({
  declarations: [
    AppComponent,
    KeyeventdemoComponent,
    MouseEventsComponent,
    MisceleanouesComponent,
    OnlineshopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [MisceleanouesComponent]
})
export class AppModule { }
