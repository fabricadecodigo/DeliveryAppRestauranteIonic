import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HoursPageRoutingModule } from './hours-routing.module';

import { HoursPage } from './hours.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HoursPageRoutingModule
  ],
  declarations: [HoursPage]
})
export class HoursPageModule {}
