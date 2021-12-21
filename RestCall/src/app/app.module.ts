import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountriesComponent } from './countries.component';
import { CountriesService } from './countries.service';
import { MockComponent } from './mock/mock.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    MockComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, //HttpClientModule will contain the definition of HttpClient class
    FormsModule
  ],
  providers: [CountriesService],
  //bootstrap: [CountriesComponent]
  //bootstrap: [MockComponent]
  bootstrap: [PostComponent]
})
export class AppModule { }
