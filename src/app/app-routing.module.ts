import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConverterComponent } from 'src/app/pages/converter/converter.component';
import { HistoryComponent } from 'src/app/pages/history/history.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { CurrencyListComponent } from './pages/currency-list/currency-list.component';

const routes: Routes = [
  {
    path: '',
    title: 'Início | Conversor de moedas',
    component: HomeComponent,
  },
  {
    path: 'currencies',
    title: 'Listagem | Conversor de moedas',
    component: CurrencyListComponent,
  },
  {
    path: 'converter',
    title: 'Conversor | Conversor de moedas',
    component: ConverterComponent,
  },
  {
    path: 'history',
    title: 'Histórico | Conversor de moedas',
    component: HistoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
