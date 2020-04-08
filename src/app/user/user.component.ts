import { Component, OnInit } from '@angular/core';
import {UserModel} from '../_model/user.model';
import {MainService} from '../_service/main.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: UserModel;

  constructor(private service: MainService) { }

  ngOnInit(): void {

  }

}
