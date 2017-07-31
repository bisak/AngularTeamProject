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
  currentPage;
  search;
  totalPages;
  products;

  constructor(private productsService: ProductsService,
              private route: ActivatedRoute,
              private toastService: ToastService,
              private router: Router) {
    this.onDataError = this.onDataError.bind(this);
    this.onDataSuccess = this.onDataSuccess.bind(this);
  }

  ngOnInit() {
    this.listenForUrlChanges();
  }

  onDataSuccess(response) {
    const { data } = response;
    this.totalPages = data.pagesCount;
    this.products = data.products;
    window.scrollTo(0, 0);
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

  listenForUrlChanges() {
    this.route.queryParams.subscribe((params: Params) => {
      this.currentPage = params.page || 1;
      this.search = params.search || '';
      this.getProducts(this.currentPage, this.search).then(this.onDataSuccess).catch(this.onDataError);
    });
  }
}
