import { Component, OnInit } from '@angular/core';
import {CategoryModel} from '../model/category.model';
import {HttpClient} from '@angular/common/http';
import {AdminService} from '../admin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categories: CategoryModel[];

  constructor(private service: AdminService) { }

  ngOnInit(): void {
    this.service.getCategories().subscribe(response => {
      this.categories = response;
    }, error => console.log(error));
  }

}
