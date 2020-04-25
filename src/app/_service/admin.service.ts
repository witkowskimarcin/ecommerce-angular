import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CategoryModel} from '../_model/category.model';
import {SubcategoryModel} from '../_model/subcategory.model';
import {ProductModel} from '../_model/products.model';
import {OpportunityModel} from '../_model/opportunity.model';
import {catchError} from 'rxjs/operators';
import {CustomErrorHandler} from './custom_error_handler';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  addCategory(category: CategoryModel){
    const address = 'panel/admin/category/add';
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    return this.http.post<any>(address, category, { headers }).pipe(catchError(CustomErrorHandler.errorHandler));
  }

  editCategory(id: number, category: CategoryModel){
    const address = 'panel/admin/category/'+id+'/edit';
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    return this.http.put<any>(address, category, { headers }).pipe(catchError(CustomErrorHandler.errorHandler));
  }

  removeCategory(id: number){
    const address = 'panel/admin/category/'+id+'/remove';
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    return this.http.delete<any>(address, { headers }).pipe(catchError(CustomErrorHandler.errorHandler));
  }

  //============================

  addSubcategory(id: number, category: SubcategoryModel){
    const address = 'panel/admin/category/'+id+'/subcategory/add';
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    return this.http.post<any>(address, category, { headers }).pipe(catchError(CustomErrorHandler.errorHandler));
  }

  editSubcategory(id: number, category: SubcategoryModel){
    const address = 'panel/admin/subcategory/'+id+'/edit';
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    return this.http.put<any>(address, category, { headers }).pipe(catchError(CustomErrorHandler.errorHandler));
  }

  removeSubcategory(id: number){
    const address = 'panel/admin/subcategory/'+id+'/remove';
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    return this.http.delete<any>(address, { headers }).pipe(catchError(CustomErrorHandler.errorHandler));
  }

  //=============================

  addProduct(id: number, p: ProductModel){
    const address = 'panel/admin/subcategory/'+id+'/product/add';
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    return this.http.post<any>(address, p, { headers }).pipe(catchError(CustomErrorHandler.errorHandler));
  }

  editProduct(id: number, p: ProductModel){
    const address = 'panel/admin/product/'+id+'/edit';
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    return this.http.put<any>(address, p, { headers }).pipe(catchError(CustomErrorHandler.errorHandler));
  }

  removeProduct(id: number){
    const address = 'panel/admin/product/'+id+'/remove';
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    return this.http.delete<any>(address, { headers }).pipe(catchError(CustomErrorHandler.errorHandler));
  }

  //===============================================

  addPromotedProduct(id: number){
    const address = 'panel/admin/promotedproduct/product/'+id+'/add';
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    return this.http.post<any>(address, { headers }).pipe(catchError(CustomErrorHandler.errorHandler));
  }

  removePromotedProduct(id: number){
    const address = 'panel/admin/promotedproduct/'+id+'/remove';
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    return this.http.delete<any>(address, { headers }).pipe(catchError(CustomErrorHandler.errorHandler));
  }

  //=================================================

  setOpportunity(o: OpportunityModel){
    const address = 'panel/admin/opportunity/set';
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    return this.http.post<any>(address, o, { headers }).pipe(catchError(CustomErrorHandler.errorHandler));
  }

  unsetOpportunity(){
    const address = 'panel/admin/opportunity/unset';
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    return this.http.delete<any>(address, { headers }).pipe(catchError(CustomErrorHandler.errorHandler));
  }
}
