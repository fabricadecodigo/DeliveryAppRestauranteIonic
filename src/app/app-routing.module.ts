import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
  },
  {
    path: 'cardapio',
    children: [
      {
        path: '',
        loadChildren: () => import('./cardapio/cardapio-list/cardapio-list.module').then(m => m.CardapioListPageModule)
      },
      {
        path: 'new',
        loadChildren: () => import('./cardapio/cardapio-edit/cardapio-edit.module').then(m => m.CardapioEditPageModule)
      },
      {
        path: 'edit/:id',
        loadChildren: () => import('./cardapio/cardapio-edit/cardapio-edit.module').then(m => m.CardapioEditPageModule)
      }
    ]
  },
  {
    path: 'categories',
    children: [
      {
        path: '',
        loadChildren: () => import('./categories/category-list/category-list.module').then(m => m.CategoryListPageModule)
      },
      {
        path: 'new',
        loadChildren: () => import('./categories/category-edit/category-edit.module').then(m => m.CategoryEditPageModule)
      },
      {
        path: 'edit/:id',
        loadChildren: () => import('./categories/category-edit/category-edit.module').then(m => m.CategoryEditPageModule)
      }
    ]
  },
  {
    path: 'delivery',
    children: [
      {
        path: '',
        loadChildren: () => import('./delivery/delivery-list/delivery-list.module').then( m => m.DeliveryListPageModule)
      },
      {
        path: 'new',
        loadChildren: () => import('./delivery/delivery-edit/delivery-edit.module').then( m => m.DeliveryEditPageModule)
      },
      {
        path: 'edit/:id',
        loadChildren: () => import('./delivery/delivery-edit/delivery-edit.module').then( m => m.DeliveryEditPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
