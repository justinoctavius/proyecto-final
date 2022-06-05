import { Component } from '@angular/core';
import {
  TransactionFilterSortBy,
  SortByTypeTypes,
} from '../../interfaces/transaction-filter.interface';
import { FilterButtonType } from '../../../shared/intefaces/filter-button.interface';
import { TransactionsService } from '../../services/transactions.service';
import { SortByDateTypes } from '../../interfaces/transaction-filter.interface';

@Component({
  selector: 'app-transaction-filter',
  templateUrl: './transaction-filter.component.html',
})
export class TransactionFilterComponent {
  constructor(private transactionsService: TransactionsService) {}

  byType: TransactionFilterSortBy = {
    name: 'tipo',
    types: [
      { value: SortByTypeTypes.ALL, desc: 'todos' },
      { value: SortByTypeTypes.EXPENSIVE, desc: 'gastos' },
      { value: SortByTypeTypes.INCOMES, desc: 'ingresos' },
    ],
  };
  byDate: TransactionFilterSortBy = {
    name: 'fecha',
    types: [
      { value: SortByDateTypes.ASC, desc: 'asc' },
      { value: SortByDateTypes.DESC, desc: 'desc' },
    ],
  };

  async onSortByTypeChange(selected: FilterButtonType) {
    await this.transactionsService.getTransactionsByType(
      selected.value as SortByTypeTypes
    );
  }

  onSortByDateChange(selected: FilterButtonType) {
    this.transactionsService.sortTransactionsByDate(
      selected.value as SortByDateTypes
    );
  }
}
