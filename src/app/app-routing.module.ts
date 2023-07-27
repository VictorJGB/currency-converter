import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from 'src/pages/home/home.component';
import { CoinsListComponent } from 'src/pages/coins-list/coins-list.component';
import { ConverterComponent } from 'src/pages/converter/converter.component';
import { HistoryComponent } from 'src/pages/history/history.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'coins',
    component: CoinsListComponent,
  },
  {
    path: 'converter',
    component: ConverterComponent,
  },
  {
    path: 'history',
    component: HistoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
