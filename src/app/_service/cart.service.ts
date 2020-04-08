import {Injectable, OnInit} from '@angular/core';
import {CartModel} from '../_model/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService{
  cart: CartModel;

  constructor() {
    this.cart = this.getLocalStorage();
    this.setLocalStorage();
  }

  addToCart(id: number, quantity: number){
    // this.cart.products.set(id, this.cart.products.get(id) + quantity);
    // if (this.cart.products.has(id)) this.cart.products.set(id, this.cart.products.get(id) + quantity);
    // else this.cart.products.set(id, quantity);
    if (this.cart.products[id] == null) this.cart.products[id] = quantity;
    else this.cart.products[id] += quantity;
    this.setLocalStorage();
  }

  minusFromCart(id: number, quantity: number){this.cart.products[id] -= quantity;
    if (this.cart.products[id] <= 0)
    {
      // this.cart.products.delete(id);

      let newMap = {};
      for (let k in this.cart.products) {
        if (parseInt(k) != id) newMap[k] = this.cart.products[k];
      }
      this.cart.products = newMap;
    }
    this.setLocalStorage();
  }

  removeAllProducts(){
    this.cart.products = {};
  }

  removeFromCart(id: number){

    let newMap = {};
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

  getQuantity(){
    let sum = 0;

    for (let k in this.cart.products) {
      sum += 1;
    }

    return sum;
  }
}
