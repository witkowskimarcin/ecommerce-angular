import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserModel} from '../_model/user.model';
import {catchError} from 'rxjs/operators';
import {CustomErrorHandler} from './custom_error_handler';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  register(user: UserModel) {
    const address = 'auth/signup';
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    return this.http.post<any>(address, user, { headers }).pipe(catchError(CustomErrorHandler.errorHandler));
  }

  login(login: string, password: string){
    return null;
  }

  logout(){
    const address = 'auth/logout';
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    return this.http.get<any>(address, { headers }).pipe(catchError(CustomErrorHandler.errorHandler));
  }
}
