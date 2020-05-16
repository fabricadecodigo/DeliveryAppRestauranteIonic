import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeliveryPage } from './delivery.page';
import { DeliveryPageRoutingModule } from './delivery-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeliveryPageRoutingModule
  ],
  declarations: [DeliveryPage]
})
export class DeliveryPageModule {}
