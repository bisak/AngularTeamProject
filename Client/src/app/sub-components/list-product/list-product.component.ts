import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ToastService } from '../../services/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  @Input() product;

  constructor(private productsService: ProductsService, private toastService: ToastService, private router: Router) {
  }

  ngOnInit() {
  }

  handleUndelete() {
    this.productsService.undeleteProduct(this.product._id).then((data) => {
        let productId = data.data._id;
        this.toastService.successToast('Product undeleted successfully');
        this.router.navigate([`/products/${productId}`]);
      })
      .catch((error) => {
        console.log(error);
        this.toastService.errorToast('An error occured.');
      });

  }

}
