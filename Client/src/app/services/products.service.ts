import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class ProductsService {

  constructor(private apiService: ApiService) {
  }

  addProduct(data) {
    let formData: FormData = new FormData();
    const productToAddCopy = { ...data };
    const { sourceCode } = productToAddCopy;
    delete productToAddCopy.sourceCode;
    formData.append('data', JSON.stringify(productToAddCopy));
    formData.append('sourceCode', sourceCode);
    return this.apiService.post('/component/add', formData);
  }
  editProduct(id, data) {
    let formData: FormData = new FormData();
    const productToEditCopy = { ...data };
    const { sourceCode } = productToEditCopy;
    delete productToEditCopy.sourceCode;
    formData.append('data', JSON.stringify(productToEditCopy));
    if(sourceCode){
      formData.append('sourceCode', sourceCode);
    }
    return this.apiService.put(`/component/${id}/edit`, formData);
  }

  getOnePageProducts(page?: number | string, search?: string) {
    return this.apiService.get(`/components?page=${page}&search=${search}`);
  }

  getSingleProduct(id) {
    return this.apiService.get(`/component/${id}`);
  }

  addReview(id, review) {
    return this.apiService.post(`/component/${id}/review`, { content: review });
  }

  buyProduct(id) {
    return this.apiService.post(`/component/${id}/buy`, {});
  }

  deleteProduct(id) {
    return this.apiService.post(`/component/${id}/delete`, {});
  }

}
