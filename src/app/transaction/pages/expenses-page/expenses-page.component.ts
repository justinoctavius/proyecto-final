import { TransactionsService } from './../../services/transactions.service';
import { Component } from '@angular/core';
import { SortByTypeTypes } from '../../interfaces/transaction-filter.interface';

@Component({
  selector: 'app-expenses-page',
  templateUrl: './expenses-page.component.html',
})
export class ExpensesPageComponent {
  transactionType: SortByTypeTypes = SortByTypeTypes.EXPENSIVE;

  constructor(private transactionsService: TransactionsService) {}

  async ngOnInit() {
    await this.transactionsService.getTransactionsByType(
      SortByTypeTypes.EXPENSIVE
    );
  }

  get transactions() {
    return this.transactionsService.transactions;
  }
}
