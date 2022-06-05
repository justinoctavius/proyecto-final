import { TransactionType } from './transaction.interface';
import { FilterButtonType } from '../../shared/intefaces/filter-button.interface';

export interface TransactionFilter {
  type?: TransactionType;
  mount?: number;
  date?: Date;
}

export interface TransactionFilterSortBy {
  name: string;
  types: FilterButtonType[];
}

export enum SortByTypeTypes {
  ALL = 'ALL',
  EXPENSIVE = 'EXPENSIVE',
  INCOMES = 'INCOMES',
}

export enum SortByDateTypes {
  DESC = 'DESC',
  ASC = 'ASC',
}

export enum SortByMountTypes {
  DESC = 'DESC',
  ASC = 'ASC',
}
