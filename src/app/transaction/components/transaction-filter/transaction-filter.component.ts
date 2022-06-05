import { Component, Input } from '@angular/core';
import {
  TransactionFilterSortBy,
  SortByTypeTypes,
  SortByMountTypes,
} from '../../interfaces/transaction-filter.interface';
import { FilterButtonType } from '../../../shared/intefaces/filter-button.interface';
import { TransactionsService } from '../../services/transactions.service';
import { SortByDateTypes } from '../../interfaces/transaction-filter.interface';

@Component({
  selector: 'app-transaction-filter',
  templateUrl: './transaction-filter.component.html',
})
export class TransactionFilterComponent {
  @Input() typeFilter: boolean = true;
  @Input() dateFilter: boolean = true;
  @Input() mountFilter: boolean = true;

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
      { value: SortByDateTypes.ASC, desc: 'recientes' },
      { value: SortByDateTypes.DESC, desc: 'antiguas' },
    ],
  };
  byMount: TransactionFilterSortBy = {
    name: 'monto',
    types: [
      { value: SortByMountTypes.ASC, desc: 'mayor' },
      { value: SortByMountTypes.DESC, desc: 'menor' },
    ],
  };

  constructor(private transactionsService: TransactionsService) {}

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

  onSortByMountChange(selected: FilterButtonType) {
    this.transactionsService.sortTransactionsByMount(
      selected.value as SortByMountTypes
    );
  }
}
