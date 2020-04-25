import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CategoryModel} from '../_model/category.model';
import {SubcategoryModel} from '../_model/subcategory.model';
import {ProductModel} from '../_model/products.model';
import {PromotedproductModel} from '../_model/promotedproduct.model';
import {CartModel} from '../_model/cart.model';
import {OpportunityModel} from '../_model/opportunity.model';
import {catchError} from 'rxjs/operators';
import {CustomErrorHandler} from './custom_error_handler';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }

  getCategories(): Observable<CategoryModel[]>{
    const address = 'categories';
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    return this.http.get<any>(address, { headers }).pipe(catchError(CustomErrorHandler.errorHandler));
  }

  getCategory(id: number): Observable<CategoryModel>{
    const address = 'category/' +id;
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    return this.http.get<any>(address, { headers }).pipe(catchError(CustomErrorHandler.errorHandler));
  }

  getSubcategories(id: number): Observable<SubcategoryModel[]>{
    const address = 'category/'+id+'/subcategories';
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    return this.http.get<any>(address, { headers }).pipe(catchError(CustomErrorHandler.errorHandler));
  }

  getSubcategory(id: number): Observable<SubcategoryModel>{
    const address = 'subcategory/'+id;
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    return this.http.get<any>(address, { headers }).pipe(catchError(CustomErrorHandler.errorHandler));
  }

  getProducts(id: number): Observable<ProductModel[]>{
    const address = 'subcategory/'+id+'/products';
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    return this.http.get<any>(address, { headers }).pipe(catchError(CustomErrorHandler.errorHandler));
  }

  getProduct(id: number): Observable<ProductModel>{
    const address = 'product/'+id;
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    return this.http.get<any>(address, { headers }).pipe(catchError(CustomErrorHandler.errorHandler));
  }

  getPromotedProducts(): Observable<PromotedproductModel[]>{
    const address = 'promotedproducts';
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    return this.http.get<any>(address, { headers }).pipe(catchError(CustomErrorHandler.errorHandler));
  }

  getOpportunity(): Observable<OpportunityModel>{
    const address = 'opportunity';
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    return this.http.get<any>(address, { headers }).pipe(catchError(CustomErrorHandler.errorHandler));
  }

  getCategoryOfProduct(pid: number) {
    const address = 'product/'+pid+'/category';
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    return this.http.get<any>(address, { headers }).pipe(catchError(CustomErrorHandler.errorHandler));
  }

  getSubcategoryOfProduct(pid: number) {
    const address = 'product/'+pid+'/subcategory';
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    return this.http.get<any>(address, { headers }).pipe(catchError(CustomErrorHandler.errorHandler));
  }
}
