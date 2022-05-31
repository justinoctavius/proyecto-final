import { TransactionType } from './transaction.interface';

export interface TransactionFilter {
  type?: TransactionType;
  mount?: number;
  date?: Date;
}
