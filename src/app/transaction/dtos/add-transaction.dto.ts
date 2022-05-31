import { TransactionType } from '../interfaces/transaction.interface';

export interface AddTransactionDto {
  mount: number;
  description: string;
  type: TransactionType;
  category_id: string;
  date: Date;
}
