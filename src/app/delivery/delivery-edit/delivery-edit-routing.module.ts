import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeliveryEditPage } from './delivery-edit.page';

const routes: Routes = [
  {
    path: '',
    component: DeliveryEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeliveryEditPageRoutingModule {}
