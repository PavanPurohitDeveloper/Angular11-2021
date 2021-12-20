import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountriesComponent } from './countries.component';
import { CountriesService } from './countries.service';
import { MockComponent } from './mock/mock.component';

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    MockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule //HttpClientModule will contain the definition of HttpClient class
  ],
  providers: [CountriesService],
  //bootstrap: [CountriesComponent]
  bootstrap: [MockComponent]
})
export class AppModule { }
