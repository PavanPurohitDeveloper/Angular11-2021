import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassdemoComponent } from './classdemo/classdemo.component';
import { StyledemoComponent } from './styledemo/styledemo.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassdemoComponent,
    StyledemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [StyledemoComponent]
})
export class AppModule { }
