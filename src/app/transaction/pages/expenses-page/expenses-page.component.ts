import { TransactionsService } from './../../services/transactions.service';
import { Component } from '@angular/core';
import { SortByTypeTypes } from '../../interfaces/transaction-filter.interface';
import { ExpensiveService } from '../../services/expensive.service';

@Component({
  selector: 'app-expenses-page',
  templateUrl: './expenses-page.component.html',
})
export class ExpensesPageComponent {
  transactionType: SortByTypeTypes = SortByTypeTypes.EXPENSIVE;

  constructor(private expensiveService: ExpensiveService) {}

  async ngOnInit() {
    await this.expensiveService.getTransactions();
  }

  get transactions() {
    return this.expensiveService.transactions;
  }

  onRemoveClick(id: string) {
    this.expensiveService.removeTransaction(id);
  }

  async onFilterByDateChange(date: Date) {
    await this.expensiveService.getTransactionsByFilter({ date });
  }

  async onFilterByMountChange(mount: number) {
    await this.expensiveService.getTransactionsByFilter({ mount });
  }
}
