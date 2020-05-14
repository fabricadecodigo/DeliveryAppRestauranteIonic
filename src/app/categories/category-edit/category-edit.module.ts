import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryEditPageRoutingModule } from './category-edit-routing.module';

import { CategoryEditPage } from './category-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryEditPageRoutingModule
  ],
  declarations: [CategoryEditPage]
})
export class CategoryEditPageModule {}
