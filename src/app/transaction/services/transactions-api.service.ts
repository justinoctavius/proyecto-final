import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddTransactionDto } from '../dtos/add-transaction.dto';
import { UpdateTransactionDto } from '../dtos/update-transaction.dto';
import { TransactionFilter } from '../interfaces/transaction-filter.interface';

@Injectable({
  providedIn: 'root',
})
export class TransactionsApiService {
  constructor(private http: HttpClient) {}

  getTransactions() {}
  getOneTransaction(id: string) {}
  addTransaction(transaction: AddTransactionDto) {}
  updateTransaction(transaction: UpdateTransactionDto) {}
  removeTransaction(id: string) {}
  filterTransaction(filter: TransactionFilter) {}
}
