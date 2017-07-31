import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class ProfileService {

  constructor(private apiService: ApiService) {
  }

  getProfile(username) {
    return this.apiService.get(`/users/${username}`);
  }
}
