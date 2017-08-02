import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class UsersService {

  constructor(private apiService: ApiService) {
  }

  getAllAdmins() {
    return this.apiService.get('/users/admins');
  }

  getAllNonAdmins() {
    return this.apiService.get('/users/non-admins');
  }

  getAllUsers() {
    return this.apiService.get('/users');
  }

  removeAdmin(username) {
    return this.apiService.post(`/users/${username}/remove-admin`, {});
  }

  addAdmin(username) {
    return this.apiService.post(`/users/${username}/make-admin`, {});
  }

  banUser(username) {
    return this.apiService.post(`/users/${username}/ban`, {});
  }
}
