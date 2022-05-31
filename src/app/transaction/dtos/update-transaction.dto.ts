import {
  TransactionCategory,
  TransactionType,
} from '../interfaces/transaction.interface';

export interface UpdateTransactionDto {
  id?: string;
  mount?: string;
  description?: string;
  type?: TransactionType;
  category_id?: TransactionCategory;
  date: Date;
}
