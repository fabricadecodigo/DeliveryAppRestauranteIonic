import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardapioListPage } from './cardapio-list.page';

const routes: Routes = [
  {
    path: '',
    component: CardapioListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardapioListPageRoutingModule {}
