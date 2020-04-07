import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CategoryModel} from './model/category.model';
import {SubcategoryModel} from './model/subcategory.model';
import {ProductModel} from './model/products.model';
import {PromotedproductModel} from './model/promotedproduct.model';
import {CartModel} from './model/cart.model';
import {OpportunityModel} from './model/opportunity.model';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }

  getCategories(): Observable<CategoryModel[]>{
    const address = 'panel/admin/categories';
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    return this.http.get<any>(address, { headers });
  }

  getCategory(id: number): Observable<CategoryModel>{
    const address = 'panel/admin/category/' +id;
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    return this.http.get<any>(address, { headers });
  }

  getSubcategories(id: number): Observable<SubcategoryModel[]>{
    const address = 'panel/admin/category/'+id+'/subcategories';
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    return this.http.get<any>(address, { headers });
  }

  getSubcategory(id: number): Observable<SubcategoryModel>{
    const address = 'panel/admin/subcategory/'+id;
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    return this.http.get<any>(address, { headers });
  }

  getProducts(id: number): Observable<ProductModel[]>{
    const address = 'panel/admin/subcategory/'+id+'/products';
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    return this.http.get<any>(address, { headers });
  }

  getProduct(id: number): Observable<ProductModel>{
    const address = 'panel/admin/product/'+id;
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    return this.http.get<any>(address, { headers });
  }

  getPromotedProducts(): Observable<PromotedproductModel[]>{
    const address = 'panel/admin/promotedproducts';
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    return this.http.get<any>(address, { headers });
  }

  getOpportunity(): Observable<OpportunityModel>{
    const address = 'panel/admin/opportunity';
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    return this.http.get<any>(address, { headers });
  }

  getCart(): Observable<CartModel[]>{
    const address = 'cart';
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    return this.http.get<any>(address, { headers });
  }

  addProductToCart(id: number){
    const address = 'cart/product/'+id+'/add';
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    return this.http.put<any>(address, { headers });
  }

  // plusCart(id: number): Observable<CartModel[]>{
  //   const address = 'cart/product/'+id+'/plus';
  //   const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
  //   return this.http.put<any>(address, { headers });
  // }

  minusCart(id: number){
    const address = 'cart/product/'+id+'/minus';
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    return this.http.put<any>(address, { headers });
  }

  removeCart(id: number){
    const address = 'cart/clear';
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    return this.http.delete<any>(address, { headers });
  }
}
