import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardapioEditPageRoutingModule } from './cardapio-edit-routing.module';

import { CardapioEditPage } from './cardapio-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardapioEditPageRoutingModule
  ],
  declarations: [CardapioEditPage]
})
export class CardapioEditPageModule {}
