import { MinValueValitationDirective } from './../../directives/min-value-valitation.directive';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ValidationContainerComponent } from './../../components/validation-container/validation-container.component';

@NgModule({
  declarations: [
    ValidationContainerComponent,
    MinValueValitationDirective
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    ValidationContainerComponent,
    MinValueValitationDirective
  ]
})
export class SharedModule { }
