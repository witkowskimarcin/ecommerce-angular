import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AdminComponent} from './admin/admin.component';
import {AdminProductsComponent} from './admin-products/admin-products.component';
import {ProductPageComponent} from './product-page/product-page.component';
import {ProductsComponent} from './products/products.component';
import {CartComponent} from './cart/cart.component';
import {UserComponent} from './user/user.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ContactComponent} from './contact/contact.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'user', component: UserComponent },
  { path: 'cart', component: CartComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin/category/:cid/subcategory/:sid/products', component: AdminProductsComponent },
  { path: 'category/:cid/subcategory/:sid/products', component: ProductsComponent },
  { path: 'product/:pid', component: ProductPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true, useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
