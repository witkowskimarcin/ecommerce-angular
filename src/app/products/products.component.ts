import { Component, OnInit } from '@angular/core';
import {MainService} from '../_service/main.service';
import {ProductModel} from '../_model/products.model';
import {CategoryModel} from '../_model/category.model';
import {SubcategoryModel} from '../_model/subcategory.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  cid: number;
  sid: number;
  products: ProductModel[];
  category: CategoryModel;
  subcategory: SubcategoryModel;

  constructor(private service: MainService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.cid = parseInt(this.route.snapshot.paramMap.get('cid'));
    this.sid = parseInt(this.route.snapshot.paramMap.get('sid'));

    this.service
      .getProducts(this.sid)
      .subscribe(response => {
        this.products = response;
        console.log(this.products);
      }, error => console.log(error));

    this.service
      .getCategory(this.cid)
      .subscribe(response => this.category = response, error => console.log(error));

    this.service
      .getSubcategory(this.sid)
      .subscribe(response => this.subcategory = response, error => console.log(error));
  }
}
