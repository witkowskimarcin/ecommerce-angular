import { Component, OnInit } from '@angular/core';
import {CategoryModel} from '../model/category.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AdminService} from '../admin.service';
import {ProductModel} from '../model/products.model';
import {ActivatedRoute} from '@angular/router';
import {ImageModel} from '../model/image.model';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  sid: number;
  products: ProductModel[];
  form: FormGroup;
  image: string | ArrayBuffer;
  images: ImageModel[];

  constructor(private service: AdminService,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute)
  {
    this.images = [];
  }

  ngOnInit(): void {

    this.sid = parseInt(this.route.snapshot.paramMap.get('sid'));

    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      quantity: ['', Validators.required],
      images: ['']
    });

    this.service.getProducts(this.sid).subscribe(response => {
      this.products = response;
    }, error => console.log(error));
  }

  onFileChange(event) {
    // this.loading = false;
    if(event.target.files.length > 0) {
      const reader = new FileReader();
      reader.onload = (ev: ProgressEvent) => {
        // console.log(reader.result);
        this.image = reader.result;
        let i = new ImageModel();
        i.image = this.image.toString();
        this.images.push(i);
      };
      reader.readAsDataURL(event.target.files[0]);
      // console.log(this.image);

      // this.form.get('images').setValue(this.image);

      // setTimeout(() => {
      //   // this.loading = true;
      // }, 1000);
    }
  }

  editProduct(id: number){

  }

  addProduct() {
    let p = new ProductModel();

    p.name = this.form.value.name;
    p.description = this.form.value.description;
    p.price = this.form.value.price;
    p.quantity = this.form.value.quantity;
    p.name = this.form.value.name;
    p.images = this.images;

    console.log("TUTAJ");
    console.log(p);
    console.log(p.images);
    this.service.addProduct(this.sid, p).subscribe(response => {}, error => console.log(error));
  }
}
