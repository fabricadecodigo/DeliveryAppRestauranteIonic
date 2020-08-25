import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurantInfoPageRoutingModule } from './restaurant-info-routing.module';

import { RestaurantInfoPage } from './restaurant-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurantInfoPageRoutingModule
  ],
  declarations: [RestaurantInfoPage]
})
export class RestaurantInfoPageModule {}
