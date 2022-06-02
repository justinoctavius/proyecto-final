import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { categoriesMock } from '../constants/mock-data.constants';

@Injectable({
  providedIn: 'root',
})
export class CategoryApiService {
  constructor(private http: HttpClient) {}

  async getCategories() {
    return categoriesMock;
  }
}
