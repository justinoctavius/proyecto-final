import { Component, Input, Output, EventEmitter } from '@angular/core';
import {
  TransactionFilterSortBy,
  SortByTypeTypes,
  SortByMountTypes,
} from '../../interfaces/transaction-filter.interface';
import { FilterButtonType } from '../../../shared/intefaces/filter-button.interface';
import { SortByDateTypes } from '../../interfaces/transaction-filter.interface';
import { Transaction } from '../../interfaces/transaction.interface';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-transaction-filter',
  templateUrl: './transaction-filter.component.html',
})
export class TransactionFilterComponent {
  @Input() typeFilter: boolean = true;
  @Input() dateFilter: boolean = true;
  @Input() mountFilter: boolean = true;
  @Input() transactions: Transaction[] = [];

  @Output() byTypeChange: EventEmitter<SortByTypeTypes> = new EventEmitter();
  @Output() byDateChange: EventEmitter<Date> = new EventEmitter();

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

  constructor(private filterService: FilterService) {}

  onSortByTypeChange(selected: FilterButtonType) {
    this.byTypeChange.emit(selected.value as SortByTypeTypes);
  }

  onSortByDateChange(selected: FilterButtonType) {
    this.filterService.sortTransactionsByDate(
      selected.value as SortByDateTypes,
      this.transactions
    );
  }

  onSortByMountChange(selected: FilterButtonType) {
    this.filterService.sortTransactionsByMount(
      selected.value as SortByMountTypes,
      this.transactions
    );
  }

  onFilterByDateChange(date: Date) {
    this.byDateChange.emit(date);
  }
}
