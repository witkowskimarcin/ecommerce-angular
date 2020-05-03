import { Component, OnInit } from '@angular/core';
import {CategoryModel} from '../../_model/category.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AdminService} from '../../_service/admin.service';
import {ProductModel} from '../../_model/products.model';
import {ActivatedRoute} from '@angular/router';
import {ImageModel} from '../../_model/image.model';
import {MainService} from '../../_service/main.service';
import {AngularEditorConfig} from '@kolkov/angular-editor';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  cid: number;
  sid: number;
  products: ProductModel[];
  form: FormGroup;
  formEdit: FormGroup;
  image: string | ArrayBuffer;
  images: ImageModel[];
  imagesEdit: ImageModel[];
  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      {class: 'arial', name: 'Arial'},
      {class: 'times-new-roman', name: 'Times New Roman'},
      {class: 'calibri', name: 'Calibri'},
      {class: 'comic-sans-ms', name: 'Comic Sans MS'}
    ],
    customClasses: [
      {
        name: 'h1',
        class: '',
        tag: 'h1',
      },
    ],
    uploadUrl: 'v1/image',
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
  };

  constructor(private service: AdminService,
              private mainService: MainService,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute)
  {
    this.images = [];
  }

  ngOnInit(): void {

    this.cid = parseInt(this.route.snapshot.paramMap.get('cid'));
    this.sid = parseInt(this.route.snapshot.paramMap.get('sid'));

    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      quantity: ['', Validators.required],
      images: ['']
    });

    this.formEdit = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      quantity: ['', Validators.required],
      images: ['', Validators.required]
    });

    this.mainService.getProducts(this.sid).subscribe(response => {
      this.products = response;
    }, error => console.log(error));
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      const reader = new FileReader();
      reader.onload = (ev: ProgressEvent) => {
        // console.log(reader.result);
        this.image = reader.result;
        let i = new ImageModel();
        i.image = this.image.toString();
        this.images.push(i);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  addProduct() {
    let p = new ProductModel();

    p.name = this.form.value.name;
    p.description = this.form.value.description;
    p.price = this.form.value.price;
    p.quantity = this.form.value.quantity;
    p.name = this.form.value.name;
    p.images = this.images;
    p.images.map((e) => e.image = e.image.substring(e.image.indexOf(',') + 1));

    console.log("TUTAJ");
    console.log(p);
    console.log(p.images);
    this.service.addProduct(this.sid, p).subscribe(response => {}, error => console.log(error));
  }

  setFormEdit(product: ProductModel){
    this.formEdit = this.formBuilder.group({
      name: [product.name, Validators.required],
      description: [product.description, Validators.required],
      price: [product.price, Validators.required],
      quantity: [product.quantity, Validators.required]
    });
  }

  onFileChangeEdit(event) {
    if (event.target.files.length > 0) {
      const reader = new FileReader();
      reader.onload = (ev: ProgressEvent) => {
        this.image = reader.result;
        let i = new ImageModel();
        i.image = this.image.toString();
        this.imagesEdit.push(i);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  editProduct(p: ProductModel){

    p.name = this.formEdit.value.name;
    p.description = this.formEdit.value.description;
    p.price = this.formEdit.value.price;
    p.quantity = this.formEdit.value.quantity;
    p.name = this.formEdit.value.name;
    // p.images = this.images;
    // p.images.map((e) => e.image = e.image.substring(e.image.indexOf(',') + 1));
    this.service.editProduct(p.id, p).subscribe(response => {}, error => console.log(error));
  }
}
