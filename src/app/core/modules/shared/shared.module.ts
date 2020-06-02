import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ValidationContainerComponent } from './../../components/validation-container/validation-container.component';
import { DateCrossValidationDirective } from './../../directives/date-cross-validation.directive';
import { MinValueValitationDirective } from './../../directives/min-value-valitation.directive';

@NgModule({
  declarations: [
    ValidationContainerComponent,
    MinValueValitationDirective,
    DateCrossValidationDirective
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    ValidationContainerComponent,
    MinValueValitationDirective,
    DateCrossValidationDirective
  ]
})
export class SharedModule { }
