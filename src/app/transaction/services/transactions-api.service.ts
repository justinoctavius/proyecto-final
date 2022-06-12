import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AddTransactionDto } from '../dtos/add-transaction.dto';

import { SortByTypeTypes } from '../interfaces/transaction-filter.interface';
import {
  Transaction,
  TransactionType,
} from '../interfaces/transaction.interface';

import { transactionsMock } from '../constants/mock-data.constants';
import { config } from 'src/app/config';
import { lastValueFrom } from 'rxjs';

const transaction_url = `${config.envs.api_url}${config.paths.transactions}`;

@Injectable({
  providedIn: 'root',
})
export class TransactionsApiService {
  private transactions: Transaction[];

  constructor(private http: HttpClient) {
    this.transactions = transactionsMock;
  }

  async getTransactions() {
    const result = this.http.get<Transaction[]>(transaction_url);
    return await lastValueFrom(result);
  }
  async getTransactionsByType(type: SortByTypeTypes) {
    if (type === SortByTypeTypes.ALL) {
      return await this.getTransactions();
    }
    const result = this.http.get<Transaction[]>(
      `${transaction_url}?type=${type}`
    );
    return await lastValueFrom(result);
  }

  async getTransactionByDate(date: Date) {
    const result = this.http.get<Transaction[]>(
      `${transaction_url}?date=${date}`
    );
    return await lastValueFrom(result);
  }

  async getTransactionByMount(mount: number) {
    const result = this.http.get<Transaction[]>(
      `${transaction_url}?mount=${mount}`
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
