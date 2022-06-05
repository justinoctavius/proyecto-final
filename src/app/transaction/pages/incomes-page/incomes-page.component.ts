import { Component } from '@angular/core';
import { SortByTypeTypes } from '../../interfaces/transaction-filter.interface';
import { IncomesService } from '../../services/incomes.service';
@Component({
  selector: 'app-incomes-page',
  templateUrl: './incomes-page.component.html',
})
export class IncomesPageComponent {
  transactionType: SortByTypeTypes = SortByTypeTypes.INCOMES;

  constructor(private incomesService: IncomesService) {}

  async ngOnInit() {
    await this.incomesService.getTransactions();
  }

  get transactions() {
    return this.incomesService.transactions;
  }

  onRemoveClick(id: string) {
    this.incomesService.removeTransaction(id);
  }
}
