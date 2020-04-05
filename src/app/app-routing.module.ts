import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AdminComponent} from './admin/admin.component';
import {AdminProductsComponent} from './admin-products/admin-products.component';
import {ProductPageComponent} from './product-page/product-page.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin/subcategory/:sid/products', component: AdminProductsComponent },
  { path: 'subcategory/:sid/product/:pid', component: ProductPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true, useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
