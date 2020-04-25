import { TestBed } from '@angular/core/testing';

import { AdminService } from './admin.service';
import {CategoryModel} from '../_model/category.model';
import {of} from 'rxjs';
import {SubcategoryModel} from '../_model/subcategory.model';
import {ProductModel} from '../_model/products.model';
import {OpportunityModel} from '../_model/opportunity.model';

describe('AdminService', () => {
  let service: AdminService;
  let mockHttp: any;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    // service = TestBed.inject(AdminService);
    mockHttp = jasmine.createSpyObj(
      'mockHttp',
      ['get', 'post', 'put', 'delete']);
    service = new AdminService(mockHttp);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add category', () => {
    const category = { id: 1, name: 'TestCategory' };
    mockHttp.post.and.returnValue(of( { status: 200 } ));
    service.addCategory(category as CategoryModel).subscribe(result => {
      expect(result.status).toBe(200);
    });
  });

  it('should edit category', () => {
    const category = { id: 1, name: 'TestCategory' };
    mockHttp.put.and.returnValue(of( { status: 200 } ));
    service.editCategory(1, category as CategoryModel).subscribe(result => {
      expect(result.status).toBe(200);
    });
  });

  it('should remove category', () => {
    mockHttp.delete.and.returnValue(of( { status: 200 } ));
    service.removeCategory(1).subscribe(result => {
      expect(result.status).toBe(200);
    });
  });

  it('should add subcategory', () => {
    const subcategory = { id: 1, name: 'TestSubcategory' };
    mockHttp.post.and.returnValue(of( { status: 200 } ));
    service.addSubcategory(1, subcategory as SubcategoryModel).subscribe(result => {
      expect(result.status).toBe(200);
    });
  });

  it('should edit subcategory', () => {
    const subcategory = { id: 1, name: 'TestSubcategory' };
    mockHttp.put.and.returnValue(of( { status: 200 } ));
    service.editSubcategory(1, subcategory as SubcategoryModel).subscribe(result => {
      expect(result.status).toBe(200);
    });
  });

  it('should remove subcategory', () => {
    mockHttp.delete.and.returnValue(of( { status: 200 } ));
    service.removeSubcategory(1).subscribe(result => {
      expect(result.status).toBe(200);
    });
  });

  it('should add product', () => {
    const product = { id: 1, name: 'TestProduct' };
    mockHttp.post.and.returnValue(of( { status: 200 } ));
    service.addProduct(1, product as ProductModel).subscribe(result => {
      expect(result.status).toBe(200);
    });
  });

  it('should edit product', () => {
    const product = { id: 1, name: 'TestProduct' };
    mockHttp.put.and.returnValue(of( { status: 200 } ));
    service.editProduct(1, product as ProductModel).subscribe(result => {
      expect(result.status).toBe(200);
    });
  });

  it('should remove product', () => {
    mockHttp.delete.and.returnValue(of( { status: 200 } ));
    service.removeProduct(1).subscribe(result => {
      expect(result.status).toBe(200);
    });
  });

  it('should add promotedproduct', () => {
    mockHttp.post.and.returnValue(of( { status: 200 } ));
    service.addPromotedProduct(1).subscribe(result => {
      expect(result.status).toBe(200);
    });
  });

  it('should remove promotedproduct', () => {
    mockHttp.delete.and.returnValue(of( { status: 200 } ));
    service.removePromotedProduct(1).subscribe(result => {
      expect(result.status).toBe(200);
    });
  });

  it('should set opportunity', () => {
    const opportunity = new OpportunityModel();
    opportunity.id = 1;
    opportunity.product = { id: 1, name: 'TestProduct' } as ProductModel;
    opportunity.quantity = 1;
    opportunity.promotionCode = 'TEST01';
    mockHttp.post.and.returnValue(of( { status: 200 } ));
    service.setOpportunity(opportunity).subscribe(result => {
      expect(result.status).toBe(200);
    });
  });
});
