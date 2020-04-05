import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CategoryModel} from './model/category.model';
import {SubcategoryModel} from './model/subcategory.model';
import {ProductModel} from './model/products.model';
import {PromotedproductModel} from './model/promotedproduct.model';
import {OpportunityModel} from './model/opportunity.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

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

  addCategory(category: CategoryModel){
    const address = 'panel/admin/category/add';
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    return this.http.post<any>(address, category, { headers });
  }

  editCategory(id: number, category: CategoryModel){
    const address = 'panel/admin/category/'+id+'/edit';
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    return this.http.put<any>(address, category, { headers });
  }

  removeCategory(id: number){
    const address = 'panel/admin/category/'+id+'/remove';
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    return this.http.delete<any>(address, { headers });
  }

  //============================

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

  addSubcategory(id: number, category: SubcategoryModel){
    const address = 'panel/admin/category/'+id+'/subcategory/add';
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    return this.http.post<any>(address, category, { headers });
  }

  editSubcategory(id: number, category: SubcategoryModel){
    const address = 'panel/admin/subcategory/'+id+'/edit';
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    return this.http.put<any>(address, category, { headers });
  }

  removeSubcategory(id: number){
    const address = 'panel/admin/subcategory/'+id+'/remove';
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    return this.http.delete<any>(address, { headers });
  }

  //=============================

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

  addProduct(id: number, p: ProductModel){
    const address = 'panel/admin/subcategory/'+id+'/product/add';
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    return this.http.post<any>(address, p, { headers });
  }

  editProduct(id: number, p: ProductModel){
    const address = 'panel/admin/product/'+id+'/edit';
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    return this.http.put<any>(address, p, { headers });
  }

  removeProduct(id: number){
    const address = 'panel/admin/product/'+id+'/remove';
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    return this.http.delete<any>(address, { headers });
  }

  //===============================================

  getPromotedProducts(): Observable<PromotedproductModel[]>{
    const address = 'panel/admin/promotedproducts';
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    return this.http.get<any>(address, { headers });
  }

  addPromotedProduct(p: PromotedproductModel){
    const address = 'panel/admin/promotedproduct/add';
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    return this.http.post<any>(address, p, { headers });
  }

  removePromotedProduct(id: number){
    const address = 'panel/admin/promotedproduct/'+id+'/remove';
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    return this.http.delete<any>(address, { headers });
  }

  //=================================================

  getOpportunity(): Observable<PromotedproductModel[]>{
    const address = 'panel/admin/opportunity';
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    return this.http.get<any>(address, { headers });
  }

  setOpportunity(o: OpportunityModel){
    const address = 'panel/admin/opportunity/set';
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    return this.http.post<any>(address, o, { headers });
  }

  unsetOpportunity(){
    const address = 'panel/admin/opportunity/unset';
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    return this.http.delete<any>(address, { headers });
  }
}
