import { Component, OnInit } from '@angular/core';
import {ProductModel} from '../_model/products.model';
import {MainService} from '../_service/main.service';
import {CartService} from '../_service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  productsMap: Map<number, number>;
  products: ProductModel[];

  constructor(private service: MainService,
              private cart: CartService) { }

  ngOnInit(): void {
    this.productsMap = this.cart.cart.products;
    this.products = [];

    for (let k in this.productsMap){
      this.service.getProduct(parseInt(k)).subscribe(
        response => this.products.push(response),
        error => console.log(error));
    }

    // this.productsMap.forEach((k, v) => {
    //   this.service.getProduct(v).subscribe(
    //     response => this.products.push(response),
    //     error => console.log(error));
    // });
  }

  getSum(){
    let sum = 0;
    // if (this.cart.cart.products.size < 1) { return 0; }
    for (let i = 0; i < this.products.length; i++) {
      sum += this.products[i].price * this.productsMap[this.products[i].id];
    }
    return sum;
  }

  addToCart(id: number) {
    this.cart.addToCart(id,1);
    window.location.reload();
  }

  minusFromCart(id: number) {
    this.cart.minusFromCart(id,1);
    window.location.reload();
  }

  deleteFromCart(id: number) {
    this.cart.removeFromCart(id);
    window.location.reload();
  }
}
