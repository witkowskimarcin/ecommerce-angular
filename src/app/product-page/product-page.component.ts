import { Component, OnInit } from '@angular/core';
import {AdminService} from '../admin.service';
import {FormBuilder} from '@angular/forms';
import {ProductModel} from '../model/products.model';
import {MainService} from '../main.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  product: ProductModel;
  pid: number;
  sid: number;

  constructor(private service: MainService,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute) {}

  ngOnInit(): void {

    this.sid = parseInt(this.route.snapshot.paramMap.get('sid'));
    this.pid = parseInt(this.route.snapshot.paramMap.get('pid'));

    this.service.getProduct(this.pid).subscribe(response => this.product = response, error => console.log(error));
  }
}
