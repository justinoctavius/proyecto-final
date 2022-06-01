import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TransactionsPageComponent } from './transaction/pages/transactions-page/transactions-page.component';
import { ExpensesPageComponent } from './transaction/pages/expenses-page/expenses-page.component';
import { IncomesPageComponent } from './transaction/pages/incomes-page/incomes-page.component';

const routes: Routes = [
  {
    path: '',
    component: TransactionsPageComponent,
    pathMatch: 'full',
  },
  {
    path: 'gastos',
    component: ExpensesPageComponent,
  },
  {
    path: 'ingresos',
    component: IncomesPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
