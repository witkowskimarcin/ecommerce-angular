import {Injectable, OnInit} from '@angular/core';
import {CartModel} from '../_model/cart.model';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {CustomErrorHandler} from './custom_error_handler';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService{
  cart: CartModel;

  constructor(private http: HttpClient) {
    this.cart = this.getLocalStorage();
    this.setLocalStorage();
  }

  getCart(){
    return this.cart;
  }

  addToCart(id: number, quantity: number){
    if (this.cart.products[id] == null) { this.cart.products[id] = quantity; }
    else { this.cart.products[id] += quantity; }
    this.setLocalStorage();
  }

  minusFromCart(id: number, quantity: number){
    this.cart.products[id] -= quantity;
    if (this.cart.products[id] <= 0)
    {
      let newMap = new Map<number, number>();
      for (let k in this.cart.products) {
        if (parseInt(k) != id) { newMap[k] = this.cart.products[k]; }
      }
      this.cart.products = newMap;
    }
    this.setLocalStorage();
  }

  removeFromCart(id: number){

    let newMap = new Map<number, number>();
    // newMap = {};
    for (let k in this.cart.products) {
      if (parseInt(k) != id) newMap[k] = this.cart.products[k];
    }
    this.cart.products = newMap;

    // this.cart.products.delete(id);
    this.setLocalStorage();
  }

  getQuantityOfAll(){
    let sum = 0;
    if (this.cart.products.size < 1) { return 0; }

    for (let k in this.cart.products) {
      sum += this.cart.products[k];
    }
    return sum;
  }

  getQuantityOfProduct(id: number){
    return this.cart.products[id];
  }

  getLocalStorage() {
    let cart = JSON.parse(localStorage.getItem('cart'));
    if (cart == null) {
      cart = new CartModel();
      cart.products = {};
    }
    return cart;
  }

  setLocalStorage(){
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  getQuantity() {
    let sum = 0;
    for (let k in this.cart.products) {
      sum += 1;
    }
    return sum;
  }

  cleanCart() {
    this.cart = new CartModel();
    this.setLocalStorage();
  }

  getCartFromApi(): Observable<CartModel>{
    const address = 'cart';
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    return this.http.get<any>(address, { headers }).pipe(catchError(CustomErrorHandler.errorHandler));
  }

  addProductToCartInApi(id: number){
    const address = 'cart/product/'+id+'/add';
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    return this.http.put<any>(address, { headers }).pipe(catchError(CustomErrorHandler.errorHandler));
  }

  minusCartFromApi(id: number){
    const address = 'cart/product/'+id+'/minus';
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    return this.http.put<any>(address, { headers }).pipe(catchError(CustomErrorHandler.errorHandler));
  }

  removeCartFromApi(id: number){
    const address = 'cart/clear';
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    return this.http.delete<any>(address, { headers }).pipe(catchError(CustomErrorHandler.errorHandler));
  }
}
