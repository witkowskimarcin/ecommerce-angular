import { TestBed } from '@angular/core/testing';

import { MainService } from './main.service';
import {HttpClient} from '@angular/common/http';
import {CategoryModel} from '../_model/category.model';
import {of} from 'rxjs';
import {SubcategoryModel} from '../_model/subcategory.model';
import {ProductModel} from '../_model/products.model';
import {PromotedproductModel} from '../_model/promotedproduct.model';
import {OpportunityModel} from '../_model/opportunity.model';
import {CartModel} from '../_model/cart.model';

describe('MainService', () => {
  let service: MainService;
  let mockHttp: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // providers: [ { provide: HttpClient, useValue: mockHttp}]
    });
    mockHttp = jasmine.createSpyObj(
      'mockHttp',
      ['get', 'post', 'put', 'delete']);
    service = new MainService(mockHttp);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get categories', () => {
    const category = { id: 1, name: 'TestCategory' };
    const categories: CategoryModel[] = [];
    categories.push(category as CategoryModel);
    mockHttp.get.and.returnValue(of(categories));
    service.getCategories().subscribe(result => {
      expect(result.length).toBe(1);
    });
  });

  it('should get category', () => {
    const category = { id: 1, name: 'TestCategory' };
    mockHttp.get.and.returnValue(of(category));
    service.getCategory(1).subscribe(result => {
      expect(result.id).toBe(1);
    });
  });

  it('should get category', () => {
    const category = { id: 1, name: 'TestCategory' };
    mockHttp.get.and.returnValue(of(category));
    service.getCategoryOfProduct(1).subscribe(result => {
      expect(result.id).toBe(1);
    });
  });

  it('should get subcategories', () => {
    const subcategory = { id: 1, name: 'TestSubcategory' };
    const subcategories: SubcategoryModel[] = [];
    subcategories.push(subcategory as SubcategoryModel);
    mockHttp.get.and.returnValue(of(subcategories));
    service.getSubcategories(1).subscribe(result => {
      expect(result.length).toBe(1);
    });
  });

  it('should get subcategory', () => {
    const subcategory = { id: 1, name: 'TestSubcategory' };
    mockHttp.get.and.returnValue(of(subcategory));
    service.getSubcategory(1).subscribe(result => {
      expect(result.id).toBe(1);
    });
  });

  it('should get subcategory', () => {
    const subcategory = { id: 1, name: 'TestSubcategory' };
    mockHttp.get.and.returnValue(of(subcategory));
    service.getSubcategoryOfProduct(1).subscribe(result => {
      expect(result.id).toBe(1);
    });
  });

  it('should get products', () => {
    const product = { id: 1, name: 'TestProduct' };
    const products: ProductModel[] = [];
    products.push(product as ProductModel);
    mockHttp.get.and.returnValue(of(products));
    service.getProducts(1).subscribe(result => {
      expect(result.length).toBe(1);
    });
  });

  it('should get product', () => {
    const product = { id: 1, name: 'TestProduct' };
    mockHttp.get.and.returnValue(of(product));
    service.getProduct(1).subscribe(result => {
      expect(result.id).toBe(1);
    });
  });

  it('should get promotedroducts', () => {
    const product = { id: 1, product: { id: 1, name: 'TestPromotedProduct' } };
    const products = [];
    products.push(product as PromotedproductModel)
    mockHttp.get.and.returnValue(of(products));
    service.getPromotedProducts().subscribe(result => {
      expect(result.length).toBe(1);
      expect(result[0].id).toBe(1);
      expect(result[0].product.id).toBe(1);
    });
  });

  it('should get opportunity', () => {
    const opportunity = {
      id: 1,
      promotionCode: 'TEST01',
      quantity: 1,
      product: { id: 1, name: 'TestProduct' }
    };
    mockHttp.get.and.returnValue(of(opportunity as OpportunityModel));
    service.getOpportunity().subscribe(result => {
      expect(result.id).toBe(1);
    });
  });
});
