import { Component, OnChanges, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, Router, NavigationExtras, ParamMap, Params } from '@angular/router';
import { ToastService } from '../../services/toast.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-deleted-products',
  templateUrl: './deleted-products.component.html',
  styleUrls: ['./deleted-products.component.css']
})

export class DeletedProductsComponent implements OnInit {
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
    this.router.navigate([`/products/deleted`], { queryParams: { page: 1, search: query } });
  }

  getDeletedProducts(page, search): Promise<Array<any>> {
    return this.productsService.getOnePageDeletedProducts(page, search);
  }

  listenForUrlChanges() {
    this.route.queryParams.subscribe((params: Params) => {
      this.currentPage = params.page || 1;
      this.search = params.search || '';
      this.getDeletedProducts(this.currentPage, this.search).then(this.onDataSuccess).catch(this.onDataError);
    });
  }
}
