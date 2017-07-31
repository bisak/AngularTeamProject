import { Component, OnInit } from '@angular/core';

import { ValidateService } from '../../services/validate.service';
import { ToastService } from '../../services/toast.service';
import { ProductsService } from '../../services/products.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  productId: string;
  name: string;
  description: string;
  demoUrl: string;
  imageUrl: string;
  price: string;
  sourceCode: File;


  constructor(private validateService: ValidateService,
              private toastService: ToastService,
              private productsService: ProductsService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id');
    this.productsService.getSingleProduct(this.productId).then((data) => {
      this.getProductSuccess(data.data);
    }).catch((error) => {
      this.getProductError(error);
    });
  }


  onSourceSelected(ev) {
    this.sourceCode = ev.target.files[0];
  }

  getProductSuccess(data) {
    this.name = data.name;
    this.description = data.description;
    this.demoUrl = data.demoUrl;
    this.imageUrl = data.imageUrl;
    this.price = data.price;
  }

  getProductError(error) {
    this.toastService.errorToast('An error occured');
  }

  onEditSubmit() {
    const data = {
      name: this.name,
      description: this.description,
      demoUrl: this.demoUrl,
      imageUrl: this.imageUrl,
      price: this.price,
      sourceCode: this.sourceCode
    };
    const validation = this.validateService.validateAddProductInput(data, true);
    if (!validation.isValid) {
      return this.toastService.toast(validation.msg);
    }

    this.productsService.editProduct(this.productId, data).then((response) => {
      if(response.success){
        this.router.navigate([`/product/${this.productId}`]);
      }
    }).catch((error) => {
      this.toastService.errorToast('An error occured')
    });
  }
}
