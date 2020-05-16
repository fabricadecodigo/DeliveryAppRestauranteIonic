import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantPage } from './restaurant.page';
const routes: Routes = [
  {
    path: '',
    component: RestaurantPage,
    children: [
      {
        path: 'address',
        loadChildren: () => import('./address/address.module').then( m => m.AddressPageModule)
      },
      {
        path: 'hours',
        loadChildren: () => import('./hours/hours.module').then( m => m.HoursPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: '',
        redirectTo: '/restaurant/profile',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantPageRoutingModule {}
