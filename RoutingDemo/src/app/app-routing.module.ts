import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppliancesComponent } from './appliances/appliances.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { FashionComponent } from './fashion/fashion.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { LightingComponent } from './lighting/lighting.component';
import { MensComponent } from './mens/mens.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { OnlineShoppingComponent } from './online-shopping/online-shopping.component';
import { WomensComponent } from './womens/womens.component';


//create the Routes..provide the routes here..child routes
const routes: Routes = [
  { path: '', component: OnlineShoppingComponent }, //path is going to be empty.

  //after that onwards, if path is going to be /electronics then ElectronicComponent.
  {
    path: 'electronics', component: ElectronicsComponent, children: [//main menu is electronics..ElectronicsComponent contains children
      { path: 'mobiles', component: MobilesComponent },  //MobilesComponent has to be loaded...sub menu/child routes
      { path: 'laptop', component: LaptopsComponent }, //LaptopsComponent has to be loaded
    ]
  },
  {
    path: 'appliances', component: AppliancesComponent, children: [  //AppliancesComponent contains childrens..
      { path: 'lighting', component: LightingComponent },  //LightingComponent has to be loaded...sub menu/child routes
      { path: 'furniture', component: FurnitureComponent }, //FurnitureComponent has to be loaded
    ]
  },
  {
    path: 'fashion', component: FashionComponent, children: [  //AppliancesComponent contains childrens..
      { path: 'mens', component: MensComponent },  //MensComponent has to be loaded...sub menu/child routes
      { path: 'womens', component: WomensComponent }, //WomensComponent has to be loaded
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //bind that particular routes to RouterModule
  exports: [RouterModule]
})
export class AppRoutingModule { }
