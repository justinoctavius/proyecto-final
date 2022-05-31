import {
  TransactionCategory,
  TransactionType,
} from '../interfaces/transaction.interface';

export interface AddTransactionDto {
  mount: number;
  description: string;
  type: TransactionType;
  category_id: TransactionCategory;
  date: Date;
}
