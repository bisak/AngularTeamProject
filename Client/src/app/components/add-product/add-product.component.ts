import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { ToastService } from '../../services/toast.service';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  name: string;
  description: string;
  demoUrl: string;
  imageUrl: string;
  price: string;
  sourceCode: File;

  constructor(private validateService: ValidateService,
              private toastService: ToastService,
              private productsService: ProductsService,
              private router: Router) {
  }

  ngOnInit() {
  }


  onSourceSelected(ev) {
    this.sourceCode = ev.target.files[0];
  }

  onAddSubmit() {
    const data = {
      name: this.name,
      description: this.description,
      demoUrl: this.demoUrl,
      imageUrl: this.imageUrl,
      price: this.price,
      sourceCode: this.sourceCode
    };

    const validation = this.validateService.validateAddProductInput(data);
    if (!validation.isValid) {
      return this.toastService.toast(validation.msg);
    }

    this.productsService.addProduct(data).then((response) => {
      if(response.success){
        // this.router.navigate(['/products', 'all']); //TODO remove comment
      }
    }).catch((error) => {
      this.toastService.errorToast('An error occured')
    });
  }
}
