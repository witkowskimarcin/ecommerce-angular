import {Component, OnInit} from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {CategoryModel} from '../_model/category.model';
import {AdminService} from '../_service/admin.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SubcategoryModel} from '../_model/subcategory.model';
import {PromotedproductModel} from '../_model/promotedproduct.model';
import {OpportunityModel} from '../_model/opportunity.model';
import {MainService} from '../_service/main.service';

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

  constructor(private service: AdminService,
              private mainService: MainService,
              private formBuilder: FormBuilder) {}

  ngOnInit(): void {

    this.mainService.getCategories().subscribe(response => {
      this.categories = response;
    }, error => console.log(error));

    this.mainService.getPromotedProducts().subscribe(response => {
      this.promotedproducts = response;
    }, error => console.log(error));

    this.mainService.getOpportunity().subscribe(response => {
      this.opportunity = response;
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
    this.service.addPromotedProduct(id).subscribe(response => {} , error => console.log(error));
  }

  setOpportunity(){
    let id = this.formOpporunity.value.productId;
    this.service.setOpportunity(id).subscribe(response => {} , error => console.log(error));
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
