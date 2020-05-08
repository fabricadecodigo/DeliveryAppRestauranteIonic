import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardapioListPageRoutingModule } from './cardapio-list-routing.module';

import { CardapioListPage } from './cardapio-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardapioListPageRoutingModule
  ],
  declarations: [CardapioListPage]
})
export class CardapioListPageModule {}
