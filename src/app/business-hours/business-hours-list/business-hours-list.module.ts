import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BusinessHoursListPageRoutingModule } from './business-hours-list-routing.module';

import { BusinessHoursListPage } from './business-hours-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BusinessHoursListPageRoutingModule
  ],
  declarations: [BusinessHoursListPage]
})
export class BusinessHoursListPageModule {}
