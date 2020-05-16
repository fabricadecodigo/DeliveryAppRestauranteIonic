import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HoursPage } from './hours.page';

const routes: Routes = [
  {
    path: '',
    component: HoursPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HoursPageRoutingModule {}
