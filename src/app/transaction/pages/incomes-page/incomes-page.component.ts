import { Component } from '@angular/core';
import { SortByTypeTypes } from '../../interfaces/transaction-filter.interface';
import { TransactionsService } from '../../services/transactions.service';

@Component({
  selector: 'app-incomes-page',
  templateUrl: './incomes-page.component.html',
})
export class IncomesPageComponent {
  transactionType: SortByTypeTypes = SortByTypeTypes.INCOMES;

  constructor(private transactionsService: TransactionsService) {}

  async ngOnInit() {
    await this.transactionsService.getTransactionsByType(
      SortByTypeTypes.INCOMES
    );
  }

  get transactions() {
    return this.transactionsService.transactions;
  }
}
