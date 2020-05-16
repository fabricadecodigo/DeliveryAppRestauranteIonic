import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeliveryEditPageRoutingModule } from './delivery-edit-routing.module';

import { DeliveryEditPage } from './delivery-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeliveryEditPageRoutingModule
  ],
  declarations: [DeliveryEditPage]
})
export class DeliveryEditPageModule {}
