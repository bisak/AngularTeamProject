import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  productId;
  product;

  constructor(private productsService: ProductsService, private route: ActivatedRoute, private toastService: ToastService) {
  }

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id');
    this.productsService.getSingleProduct(this.productId).then((data) => {
      this.getProductSuccess(data.data);
    }).catch((error) => {
      this.getProductError(error);
    });
  }

  getProductSuccess(data) {
    console.log(data);
    this.product = data;
  }

  getProductError(error) {

  }

  handleAddReview(review) {
    if (review.value) {
      return this.productsService.addReview(this.productId, review.value).then((response) => {
        review.value = '';
        this.product.reviews.unshift(response.data);
      }).catch((error) => {
        this.toastService.errorToast('An error occured.');
      });
    } else {
      this.toastService.toast('Please enter a review.');
    }
  }

}
