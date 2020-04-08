import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CartService} from '../_service/cart.service';
import {UserModel} from '../_model/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  quantity: number;
  user: UserModel;

  constructor(public cart: CartService) { }

  ngOnInit(): void {
    // this.quantity = this.cart.getQuantity();
    this.quantity = this.cart.getQuantity();
  }

  logout() {

  }
}
