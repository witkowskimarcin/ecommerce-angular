import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import {CartModel} from '../_model/cart.model';
import {of} from 'rxjs';

describe('UserService', () => {
  let service: UserService;
  let mockHttp: any;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    // service = TestBed.inject(UserService);
    // mockHttp = jasmine.createSpyObj(
    //   'mockHttp',
    //   ['get', 'post', 'put', 'delete']);
    service = new UserService(mockHttp);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
