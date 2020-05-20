import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusinessHoursListPage } from './business-hours-list.page';

const routes: Routes = [
  {
    path: '',
    component: BusinessHoursListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusinessHoursListPageRoutingModule {}
