import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from './../../core/modules/shared/shared.module';
import { DeliveryEditPageRoutingModule } from './delivery-edit-routing.module';
import { DeliveryEditPage } from './delivery-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeliveryEditPageRoutingModule,
    SharedModule
  ],
  declarations: [DeliveryEditPage]
})
export class DeliveryEditPageModule {}
