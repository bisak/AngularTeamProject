import { Component, OnChanges, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, Router, NavigationExtras, ParamMap, Params } from '@angular/router';
import { ToastService } from '../../services/toast.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  constructor(private productsService: ProductsService,
              private route: ActivatedRoute,
              private toastService: ToastService,
              private router: Router) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      const page = params.page || 1;
      const search = params.search || '';
      this.getProducts(page, search).then(this.onDataSuccess).catch(this.onDataError);
    });
  }

  onDataSuccess(data) {
    console.log(data);
  }

  onDataError(error) {
    console.log(error);
    this.toastService.errorToast('An error occured.');
  }

  handleSearch(query) {
    this.router.navigate([`/products/all`], { queryParams: { page: 1, search: query } });
  }

  getProducts(page, search): Promise<Array<any>> {
    return this.productsService.getOnePageProducts(page, search);
  }
}
