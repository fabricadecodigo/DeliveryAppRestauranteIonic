import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from './../../core/modules/shared/shared.module';
import { CardapioEditPageRoutingModule } from './cardapio-edit-routing.module';
import { CardapioEditPage } from './cardapio-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardapioEditPageRoutingModule,
    SharedModule
  ],
  declarations: [CardapioEditPage]
})
export class CardapioEditPageModule {}
