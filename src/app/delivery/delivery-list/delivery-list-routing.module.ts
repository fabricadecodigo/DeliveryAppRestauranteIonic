import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeliveryListPage } from './delivery-list.page';

const routes: Routes = [
  {
    path: '',
    component: DeliveryListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeliveryListPageRoutingModule {}
