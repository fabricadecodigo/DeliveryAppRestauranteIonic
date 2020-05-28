import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from './../../core/modules/shared/shared.module';
import { BusinessHoursEditPageRoutingModule } from './business-hours-edit-routing.module';
import { BusinessHoursEditPage } from './business-hours-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BusinessHoursEditPageRoutingModule,
    SharedModule
  ],
  declarations: [BusinessHoursEditPage]
})
export class BusinessHoursEditPageModule {}
