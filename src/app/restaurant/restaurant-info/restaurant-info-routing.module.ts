import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantInfoPage } from './restaurant-info.page';

const routes: Routes = [
  {
    path: '',
    component: RestaurantInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantInfoPageRoutingModule {}
