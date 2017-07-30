import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class StatsService {

  constructor(private apiService: ApiService) { }

  getHomeStats(){
    return this.apiService.get('/stats/home')
  }

  getAllStats(){
    return this.apiService.get('/stats/all')
  }
}
