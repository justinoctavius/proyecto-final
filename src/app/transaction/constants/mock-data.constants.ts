import {
  Transaction,
  TransactionCategory,
  TransactionIconType,
  TransactionType,
} from '../interfaces/transaction.interface';

export const categoriesMock: TransactionCategory[] = [
  {
    id: '1',
    description: 'prestamos',
    name: 'prestamos',
    iconType: TransactionIconType.LEADING,
  },
  {
    id: '2',
    description: 'salud',
    name: 'salud',
    iconType: TransactionIconType.HEALTH,
  },
  {
    id: '3',
    description: 'familia',
    name: 'familia',
    iconType: TransactionIconType.FAMILY,
  },
  {
    id: '4',
    description: 'casa',
    name: 'casa',
    iconType: TransactionIconType.HOME,
  },
  {
    id: '5',
    description: 'otros',
    name: 'otros',
    iconType: TransactionIconType.OTHERS,
  },
  {
    id: '6',
    description: 'trabajo',
    name: 'trabajo',
    iconType: TransactionIconType.WORK,
  },
];

export const transactionsMock: Transaction[] = [
  {
    id: '1',
    category: categoriesMock[0],
    date: new Date(2022, 4, 30, 15, 0, 0, 0),
    description: 'prestamo al vecino',
    mount: 5000,
    type: TransactionType.EXPENSIVE,
  },
  {
    id: '2',
    category: categoriesMock[1],
    date: new Date(2022, 6, 1, 14, 0, 0, 0),
    description: '5 acetaminofen',
    mount: 400,
    type: TransactionType.EXPENSIVE,
  },
  {
    id: '3',
    category: categoriesMock[2],
    date: new Date(2022, 6, 3, 11, 0, 0, 0),
    description: 'regalo del dia de las madres',
    mount: 2500,
    type: TransactionType.EXPENSIVE,
  },
  {
    id: '4',
    category: categoriesMock[3],
    date: new Date(2022, 6, 2, 18, 0, 0, 0),
    description: 'pago alquiler',
    mount: 15000,
    type: TransactionType.EXPENSIVE,
  },
  {
    id: '5',
    category: categoriesMock[4],
    date: new Date(2022, 3, 11, 16, 0, 0, 0),
    description: 'Bono del trabajo',
    mount: 5000,
    type: TransactionType.INCOMES,
  },
  {
    id: '6',
    category: categoriesMock[5],
    date: new Date(2022, 2, 4, 22, 0, 0, 0),
    description: 'Pago nomina',
    mount: 70000,
    type: TransactionType.INCOMES,
  },
];
