import { SortByTypeTypes } from './../../interfaces/transaction-filter.interface';
import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../../services/transactions.service';
import { TransactionType } from '../../interfaces/transaction.interface';

@Component({
  selector: 'app-transactions-page',
  templateUrl: './transactions-page.component.html',
})
export class TransactionsPageComponent implements OnInit {
  constructor(private transactionsService: TransactionsService) {}

  get transactions() {
    return this.transactionsService.transactions;
  }

  async ngOnInit() {
    await this.transactionsService.getTransaction();
  }

  async onFilterByTypeChange(type: SortByTypeTypes) {
    switch (type) {
      case SortByTypeTypes.INCOMES:
        await this.transactionsService.getTransactionsByFilter({
          type: TransactionType.INCOMES,
        });
        break;
      case SortByTypeTypes.EXPENSIVE:
        await this.transactionsService.getTransactionsByFilter({
          type: TransactionType.EXPENSIVE,
        });
        break;
      default:
        await this.transactionsService.getTransactionsByFilter({});
        break;
    }
  }

  async onRemoveClick(id: string) {
    await this.transactionsService.removeTransaction(id);
  }

  async onFilterByDateChange(date: Date) {
    await this.transactionsService.getTransactionsByFilter({ date });
  }

  async onFilterByMountChange(mount: number) {
    await this.transactionsService.getTransactionsByFilter({ mount });
  }
}
