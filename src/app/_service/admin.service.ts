import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CategoryModel} from '../_model/category.model';
import {SubcategoryModel} from '../_model/subcategory.model';
import {ProductModel} from '../_model/products.model';
import {PromotedproductModel} from '../_model/promotedproduct.model';
import {OpportunityModel} from '../_model/opportunity.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

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

  addPromotedProduct(id: number){
    const address = 'panel/admin/promotedproduct/product/'+id+'/add';
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    return this.http.post<any>(address, { headers });
  }

  removePromotedProduct(id: number){
    const address = 'panel/admin/promotedproduct/'+id+'/remove';
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    return this.http.delete<any>(address, { headers });
  }

  //=================================================

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
