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

  @Output() byTypeChange: EventEmitter<SortByTypeTypes> = new EventEmitter();
  @Output() byDateChange: EventEmitter<Date> = new EventEmitter();
  @Output() byMountChange: EventEmitter<number> = new EventEmitter();

  byType: TransactionFilterSortBy = {
    name: 'tipo',
    types: [
      { value: SortByTypeTypes.ALL, desc: 'todos' },
      { value: SortByTypeTypes.EXPENSIVE, desc: 'gastos' },
      { value: SortByTypeTypes.INCOMES, desc: 'ingresos' },
    ],
  };

  onFilterByTypeChange(selected: FilterButtonType) {
    this.byTypeChange.emit(selected.value as SortByTypeTypes);
  }

  onFilterByDateChange(date: Date) {
    this.byDateChange.emit(date);
  }

  onFilterByMountChange(mount: number) {
    this.byMountChange.emit(mount);
  }
}
