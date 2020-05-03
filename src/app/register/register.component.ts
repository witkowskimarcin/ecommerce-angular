import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MainService} from '../_service/main.service';
import {UserModel} from '../_model/user.model';
import {UserService} from '../_service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  locality: string;
  street: string;
  zipCode: string;
  phone: string;

  constructor(private service: UserService,
              private formBuilder: FormBuilder) {}

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      firstname: [''],
      lastname: [''],
      locality: [''],
      street: [''],
      zipCode: [''],
      phone: ['']
    });
  }

  register(){
    const user = new UserModel();
    this.service.register(user).subscribe();
  }
}
