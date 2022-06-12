import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AddTransactionDto } from '../dtos/add-transaction.dto';

import { TransactionFilter } from '../interfaces/transaction-filter.interface';
import { Transaction } from '../interfaces/transaction.interface';

import { config } from 'src/app/config';
import { lastValueFrom } from 'rxjs';

const transaction_url = `${config.envs.api_url}${config.paths.transactions}`;

@Injectable({
  providedIn: 'root',
})
export class TransactionsApiService {
  private transactions: Transaction[] = [];

  constructor(private http: HttpClient) {}

  async getTransactions() {
    const result = this.http.get<Transaction[]>(transaction_url);
    return await lastValueFrom(result);
  }

  async getTransactionByFilter(filters: TransactionFilter) {
    const mountFilter = filters.mount ? `&mount=${filters.mount}` : '';
    const typeFilter = filters.type ? `&type=${filters.type}` : '';
    const dateFilter = filters.date ? `&date=${filters.date}` : '';
    const result = this.http.get<Transaction[]>(
      `${transaction_url}?${mountFilter}${typeFilter}${dateFilter}`
    );
    return await lastValueFrom(result);
  }

  async getOneTransaction(id: string) {
    return this.transactions.find((transaction) => transaction.id === id);
  }

  async addTransaction(transaction: AddTransactionDto) {
    const result = this.http.post(transaction_url, { ...transaction });
    return await lastValueFrom(result);
  }

  async removeTransaction(id: string) {
    const result = this.http.delete(`${transaction_url}/${id}`);
    return await lastValueFrom(result);
  }
}
