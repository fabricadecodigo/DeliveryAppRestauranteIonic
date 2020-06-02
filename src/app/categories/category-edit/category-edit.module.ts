import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from './../../core/modules/shared/shared.module';
import { CategoryEditPageRoutingModule } from './category-edit-routing.module';
import { CategoryEditPage } from './category-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryEditPageRoutingModule,
    SharedModule
  ],
  declarations: [CategoryEditPage]
})
export class CategoryEditPageModule {}
