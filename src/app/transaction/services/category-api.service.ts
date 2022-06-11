import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TransactionCategory } from '../interfaces/transaction.interface';
import { config } from 'src/app/config';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryApiService {
  constructor(private http: HttpClient) {}

  async getCategories() {
    const result = this.http.get<TransactionCategory[]>(
      `${config.envs.api_url}${config.paths.categories}`
    );
    return await lastValueFrom(result);
  }
}
