import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from 'src/pages/home/home.component';
import { CoinsListComponent } from 'src/pages/coins-list/coins-list.component';
import { ConverterComponent } from 'src/pages/converter/converter.component';
import { HistoryComponent } from 'src/pages/history/history.component';

const routes: Routes = [
  {
    path: '',
    title: 'Início | Conversor de moedas',
    component: HomeComponent,
  },
  {
    path: 'coins',
    title: 'Listagem | Conversor de moedas',
    component: CoinsListComponent,
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
