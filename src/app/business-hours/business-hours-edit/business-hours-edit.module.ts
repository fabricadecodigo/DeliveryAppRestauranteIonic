import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BusinessHoursEditPageRoutingModule } from './business-hours-edit-routing.module';

import { BusinessHoursEditPage } from './business-hours-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BusinessHoursEditPageRoutingModule
  ],
  declarations: [BusinessHoursEditPage]
})
export class BusinessHoursEditPageModule {}
