import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryListPage } from './category-list.page';

const routes: Routes = [
  {
    path: '',
    component: CategoryListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryListPageRoutingModule {}
