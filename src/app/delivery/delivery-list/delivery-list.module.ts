import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeliveryListPageRoutingModule } from './delivery-list-routing.module';

import { DeliveryListPage } from './delivery-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeliveryListPageRoutingModule
  ],
  declarations: [DeliveryListPage]
})
export class DeliveryListPageModule {}
