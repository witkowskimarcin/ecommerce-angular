import { Component, OnInit } from '@angular/core';
import {CategoryModel} from '../model/category.model';
import {HttpClient} from '@angular/common/http';
import {AdminService} from '../admin.service';
import {PromotedproductModel} from '../model/promotedproduct.model';
import {OpportunityModel} from '../model/opportunity.model';
import {MainService} from '../main.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categories: CategoryModel[];
  promotedproducts: PromotedproductModel[];
  opportunity: OpportunityModel;

  constructor(private service: MainService) { }

  ngOnInit(): void {
    this.service.getCategories().subscribe(response => {
      this.categories = response;
    }, error => console.log(error));

    this.service.getOpportunity().subscribe(response => {
      this.opportunity = response;
    }, error => console.log(error));

    this.service.getPromotedProducts().subscribe(response => {
      this.promotedproducts = response;
    }, error => console.log(error));
  }
}
