import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ProductsComponent } from './views/products/products.component';
import { LojasComponent } from './views/lojas/lojas.component';

const routes: Routes = [{
  path:"",
  component: HomeComponent
},{
  path: "products",
  component: ProductsComponent
},{
  path: "lojas",
  component: LojasComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
