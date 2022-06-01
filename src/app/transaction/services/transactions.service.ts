import { Injectable } from '@angular/core';
import { AddTransactionDto } from '../dtos/add-transaction.dto';
import { UpdateTransactionDto } from '../dtos/update-transaction.dto';
import { Transaction } from '../interfaces/transaction.interface';
import { TransactionsApiService } from './transactions-api.service';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  error: string = '';
  transactions: Transaction[] = [];
  addTransactionDto: AddTransactionDto | null = null;
  updateTransactionDto: UpdateTransactionDto | null = null;

  constructor(private transactionApiService: TransactionsApiService) {}

  async getTransaction() {
    this.transactions = await this.transactionApiService.getTransactions();
  }

  async addTransaction() {
    try {
      if (this.addTransactionDto) {
        await this.transactionApiService.addTransaction(this.addTransactionDto);
        await this.getTransaction();
      }
    } catch (error: any) {
      this.error = error.error.message;
    }
  }

  async updateTransaction() {
    try {
      if (this.updateTransactionDto) {
        await this.transactionApiService.updateTransaction(
          this.updateTransactionDto
        );
        await this.getTransaction();
      }
    } catch (error: any) {
      this.error = error.error.message;
    }
  }
}
