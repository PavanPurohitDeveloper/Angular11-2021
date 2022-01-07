import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'orders', component: OrdersComponent },
  {
    path: 'offers',
    //which Module you suppose to execute over here.. loadChildren is mainly used for Lazy loading..
    //write import statement.. from Offers Module.. then() method which module/class you wanted to load separately.
    loadChildren: () => import('./offers/offers.module').then(m => m.OffersModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
