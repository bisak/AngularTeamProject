import { Component, EventEmitter, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import {ActivatedRoute, Router} from '@angular/router';
import { ToastService } from '../../services/toast.service';
import { MaterializeAction } from 'angular2-materialize';
import { AuthHelperService } from '../../services/auth-helper.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  productId;
  product;

  confirmBuyModal = new EventEmitter<string | MaterializeAction>();
  confirmDeleteModal = new EventEmitter<string | MaterializeAction>();

  constructor(private productsService: ProductsService,
              private route: ActivatedRoute,
              private toastService: ToastService,
              public authHelperService: AuthHelperService,
              public apiService: ApiService,
              private router: Router) {
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
    this.product = data;
  }

  getProductError(error) {
    this.toastService.errorToast('An error occured');
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

  buyProduct() {
    this.productsService.buyProduct(this.productId).then((data) => {
      this.toastService.toast('Purchased successfully');
      this.product.bought = true;
    }).catch((error) => {
      console.log(error);
      this.toastService.toast('An error occured :/');
    });
    this.closeConfirmBuyModal();
  }

  deleteProduct() {
    this.productsService.deleteProduct(this.productId).then((data) => {
      this.toastService.toast('Deleted successfully');
      this.router.navigate(['/products', 'all']);
    }).catch((error) => {
      console.log(error);
      this.toastService.toast('An error occured :/');
    });
    this.closeConfirmDeleteModal();
  }

  closeConfirmBuyModal() {
    this.confirmBuyModal.emit({ action: 'modal', params: ['close'] });
  }

  openConfirmBuyModal() {
    this.confirmBuyModal.emit({ action: 'modal', params: ['open'] });
  }

  closeConfirmDeleteModal() {
    this.confirmDeleteModal.emit({ action: 'modal', params: ['close'] });
  }

  openConfirmDeleteModal() {
    this.confirmDeleteModal.emit({ action: 'modal', params: ['open'] });
  }

}
