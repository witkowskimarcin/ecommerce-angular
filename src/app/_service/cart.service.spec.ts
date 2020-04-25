import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';
import {CartModel} from '../_model/cart.model';
import {of} from 'rxjs';
import {OpportunityModel} from '../_model/opportunity.model';

describe('CartService', () => {
  let service: CartService;
  let mockHttp: any;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    // service = TestBed.inject(CartService);
    mockHttp = jasmine.createSpyObj(
      'mockHttp',
      ['get', 'post', 'put', 'delete']);
    service = new CartService(mockHttp);
    service.addToCart(1, 1);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get cart', () => {
    const cart: CartModel = new CartModel();
    mockHttp.get.and.returnValue(of(cart as CartModel));
    service.getCartFromApi().subscribe(res => {
      expect(res.products).toBeDefined();
    });
  });

  it('should add product to cart', () => {
    const expectQuantity = service.getQuantity() + 1;
    service.addToCart(2, 1);
    expect(service.getQuantity()).toBe(expectQuantity);
  });

  it('should minus product from cart', () => {
    service.addToCart(3, 1);
    const expectQuantity = service.getQuantity() - 1;
    service.minusFromCart(3, 1);
    expect(service.getQuantity()).toBe(expectQuantity);
  });

  it('should clean cart', () => {
    service.addToCart(4, 1);
    service.cleanCart();
    expect(service.getQuantity()).toBe(0);
  });

  it('should add product to cart in api', () => {
    mockHttp.put.and.returnValue(of( { status: 200 } ));
    service.addProductToCartInApi(1).subscribe(res => {
      expect(res.status).toBe(200);
    });
  });

  it('should remove product from cart in api', () => {
    mockHttp.put.and.returnValue(of( { status: 200 } ));
    service.minusCartFromApi(1).subscribe(res => {
      expect(res.status).toBe(200);
    });
  });

  it('should clean cart in api', () => {
    mockHttp.delete.and.returnValue(of( { status: 200 } ));
    service.removeCartFromApi(1).subscribe(res => {
      expect(res.status).toBe(200);
    });
  });
});
