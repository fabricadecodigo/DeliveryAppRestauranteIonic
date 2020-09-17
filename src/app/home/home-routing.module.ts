import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('../dashboard/dashboard/dashboard.module').then(m => m.DashboardPageModule)
      },
      {
        path: 'cardapio',
        children: [
          {
            path: '',
            loadChildren: () => import('../cardapio/cardapio-list/cardapio-list.module').then(m => m.CardapioListPageModule)
          },
          {
            path: 'new',
            loadChildren: () => import('../cardapio/cardapio-edit/cardapio-edit.module').then(m => m.CardapioEditPageModule)
          },
          {
            path: 'edit/:id',
            loadChildren: () => import('../cardapio/cardapio-edit/cardapio-edit.module').then(m => m.CardapioEditPageModule)
          }
        ]
      },
      {
        path: 'categories',
        children: [
          {
            path: '',
            loadChildren: () => import('../categories/category-list/category-list.module').then(m => m.CategoryListPageModule)
          },
          {
            path: 'new',
            loadChildren: () => import('../categories/category-edit/category-edit.module').then(m => m.CategoryEditPageModule)
          },
          {
            path: 'edit/:id',
            loadChildren: () => import('../categories/category-edit/category-edit.module').then(m => m.CategoryEditPageModule)
          }
        ]
      },
      {
        path: 'delivery',
        children: [
          {
            path: '',
            loadChildren: () => import('../delivery/delivery-list/delivery-list.module').then(m => m.DeliveryListPageModule)
          },
          {
            path: 'new',
            loadChildren: () => import('../delivery/delivery-edit/delivery-edit.module').then(m => m.DeliveryEditPageModule)
          },
          {
            path: 'edit/:id',
            loadChildren: () => import('../delivery/delivery-edit/delivery-edit.module').then(m => m.DeliveryEditPageModule)
          }
        ]
      },
      {
        path: 'business-hours',
        children: [
          {
            path: '',
            loadChildren: () => import('../business-hours/business-hours-list/business-hours-list.module')
              .then(m => m.BusinessHoursListPageModule)
          },
          {
            path: 'new',
            loadChildren: () => import('../business-hours/business-hours-edit/business-hours-edit.module')
              .then(m => m.BusinessHoursEditPageModule)
          },
          {
            path: 'edit/:id',
            loadChildren: () => import('../business-hours/business-hours-edit/business-hours-edit.module')
              .then(m => m.BusinessHoursEditPageModule)
          }
        ]
      },
      {
        path: 'info',
        loadChildren: () => import('../restaurant/restaurant-info/restaurant-info.module').then( m => m.RestaurantInfoPageModule)
      },
      {
        path: 'orders',
        children: [
          {
            path: '',
            loadChildren: () => import('../orders/order-list/order-list.module').then( m => m.OrderListPageModule)
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
