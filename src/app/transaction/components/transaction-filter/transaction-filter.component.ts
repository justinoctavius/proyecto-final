import { Component } from '@angular/core';
import {
  TransactionFilterSortBy,
  SortByTypeTypes,
} from '../../interfaces/transaction-filter.interface';
import { FilterButtonType } from '../../../shared/intefaces/filter-button.interface';
import { TransactionsService } from '../../services/transactions.service';

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
      { value: 'ASC', desc: 'ascendente' },
      { value: 'DESC', desc: 'descendente' },
    ],
  };

  onSortByTypeChange(selected: FilterButtonType) {
    this.transactionsService.getTransactionsByType(
      selected.value as SortByTypeTypes
    );
  }
}
