import {
  Transaction,
  TransactionCategory,
  TransactionType,
} from '../interfaces/transaction.interface';

export const categoriesMock: TransactionCategory[] = [
  {
    id: '1',
    description: 'prestamos',
    name: 'Prestamos',
    picture_url: '',
  },
  {
    id: '2',
    description: 'salud',
    name: 'salud',
    picture_url: '',
  },
  {
    id: '3',
    description: 'familia',
    name: 'familia',
    picture_url: '',
  },
  {
    id: '4',
    description: 'casa',
    name: 'casa',
    picture_url: '',
  },
  {
    id: '5',
    description: 'otros',
    name: 'otros',
    picture_url: '',
  },
  {
    id: '6',
    description: 'trabajo',
    name: 'trabajo',
    picture_url: '',
  },
];

export const transactionsMock: Transaction[] = [
  {
    id: '1',
    category: categoriesMock[0],
    date: new Date(),
    description: 'prestamo al vecino',
    mount: 5000,
    type: TransactionType.EXPENSIVE,
  },
  {
    id: '2',
    category: categoriesMock[1],
    date: new Date(),
    description: '5 acetaminofen',
    mount: 400,
    type: TransactionType.EXPENSIVE,
  },
  {
    id: '3',
    category: categoriesMock[2],
    date: new Date(),
    description: 'regalo del dia de las madres',
    mount: 2500,
    type: TransactionType.EXPENSIVE,
  },
  {
    id: '4',
    category: categoriesMock[3],
    date: new Date(),
    description: 'pago alquiler',
    mount: 15000,
    type: TransactionType.EXPENSIVE,
  },
  {
    id: '5',
    category: categoriesMock[4],
    date: new Date(),
    description: 'Bono del trabajo',
    mount: 5000,
    type: TransactionType.INCOMES,
  },
  {
    id: '6',
    category: categoriesMock[5],
    date: new Date(),
    description: 'Pago nomina',
    mount: 70000,
    type: TransactionType.INCOMES,
  },
];
