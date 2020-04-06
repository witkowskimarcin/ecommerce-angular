import { Component, OnInit } from '@angular/core';
import {AdminService} from '../admin.service';
import {FormBuilder} from '@angular/forms';
import {ProductModel} from '../model/products.model';
import {MainService} from '../main.service';
import {ActivatedRoute} from '@angular/router';
import {SubcategoryModel} from '../model/subcategory.model';
import {CategoryModel} from '../model/category.model';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  product: ProductModel;
  cid: number;
  pid: number;
  sid: number;
  category: CategoryModel;
  subcategory: SubcategoryModel;

  constructor(private service: MainService,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute) {}

  ngOnInit(): void {

    this.cid = parseInt(this.route.snapshot.paramMap.get('cid'));
    this.sid = parseInt(this.route.snapshot.paramMap.get('sid'));
    this.pid = parseInt(this.route.snapshot.paramMap.get('pid'));

    this.service.getCategory(this.cid).subscribe(response => {
      this.category = response;
      console.log(this.product);
    }, error => console.log(error));

    this.service.getSubcategory(this.sid).subscribe(response => {
      this.subcategory = response;
      console.log(this.product);
    }, error => console.log(error));

    this.service.getProduct(this.pid).subscribe(response => {
      this.product = response;
      console.log(this.product);
    }, error => console.log(error));
  }

  addToCart(quantity: number) {

  }
}
