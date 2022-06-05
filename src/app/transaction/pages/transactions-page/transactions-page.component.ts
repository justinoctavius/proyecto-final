import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../../services/transactions.service';
import { SortByTypeTypes } from '../../interfaces/transaction-filter.interface';

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

  async onSortByTypeChange(type: SortByTypeTypes) {
    await this.transactionsService.getTransactionsByType(type);
  }

  async onRemoveClick(id: string) {
    await this.transactionsService.removeTransaction(id);
  }
}
