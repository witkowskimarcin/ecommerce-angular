import {Component, OnInit} from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {CategoryModel} from '../model/category.model';
import {AdminService} from '../admin.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SubcategoryModel} from '../model/subcategory.model';
import {PromotedproductModel} from '../model/promotedproduct.model';
import {OpportunityModel} from '../model/opportunity.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit  {

  categories: CategoryModel[];
  promotedproducts: PromotedproductModel[];
  opportunity: OpportunityModel;
  formC: FormGroup;
  formCe: FormGroup;
  formSc: FormGroup;
  formSce: FormGroup;
  formPromotedProduct: FormGroup;
  formOpporunity: FormGroup;

  constructor(private service: AdminService,  private formBuilder: FormBuilder) {}

  ngOnInit(): void {

    this.promotedproducts = [];

    this.service.getCategories().subscribe(response => {
      this.categories = response;
    }, error => console.log(error));

    this.formC = this.formBuilder.group({
      name: ['', Validators.required]
    });

    this.formCe = this.formBuilder.group({
      name: ['', Validators.required]
    });

    this.formSc = this.formBuilder.group({
      name: ['', Validators.required]
    });

    this.formSce = this.formBuilder.group({
      name: ['', Validators.required]
    });

    this.formPromotedProduct = this.formBuilder.group({
      productId: ['', Validators.required]
    });

    this.formOpporunity = this.formBuilder.group({
      productId: ['', Validators.required]
    });
  }

  addCategory() {
    let c = new CategoryModel();
    c.name = this.formC.value.name;
    this.service.addCategory(c).subscribe(response => {} , error => console.log(error));
  }

  editCategory(id: number) {
    let c = new CategoryModel();
    c.name = this.formCe.value.name;
    this.service.editCategory(id, c).subscribe(response => {} , error => console.log(error));
  }

  removeCategory(id: number) {
    this.service.removeCategory(id).subscribe(response => {} , error => console.log(error));
  }

  addSubcategory(id: number) {
    let c = new SubcategoryModel();
    c.name = this.formSc.value.name;
    this.service.addSubcategory(id, c).subscribe(response => {} , error => console.log(error));
  }

  editSubcategory(id: number) {
    let c = new SubcategoryModel();
    c.name = this.formSce.value.name;
    this.service.editSubcategory(id, c).subscribe(response => {} , error => console.log(error));
  }

  removeSubcategory(id: number) {
    this.service.removeSubcategory(id).subscribe(response => {} , error => console.log(error));
  }

  addPromotedProduct(){
    let id = this.formPromotedProduct.value.productId;
  }

  setOpportunity(){
    let id = this.formOpporunity.value.productId;
  }

  setEditFormCategory(category: CategoryModel){
    this.formCe = this.formBuilder.group({
      name: [category.name, Validators.required]
    });
  }

  setEditFormSubcategory(subcategory: SubcategoryModel){
    this.formSce = this.formBuilder.group({
      name: [subcategory.name, Validators.required]
    });
  }
}
