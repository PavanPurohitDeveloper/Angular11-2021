import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';

//Create the Routes if you dont wnat
var myRoutes: Routes = [
  { path: '', component: HomeComponent }, //If user given empty , which component you want to execute
  { path: 'home', component: HomeComponent }, //If user has given home then it should execute HomeComponent
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  //giving parameters..every parameter created with colon.
  { path: 'products/:brandname', component: ProductsComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
