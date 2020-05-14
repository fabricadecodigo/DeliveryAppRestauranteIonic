import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryEditPage } from './category-edit.page';

const routes: Routes = [
  {
    path: '',
    component: CategoryEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryEditPageRoutingModule {}
