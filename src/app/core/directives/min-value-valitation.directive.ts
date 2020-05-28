import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appMinValueValitation]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MinValueValitationDirective, multi: true }]
})
export class MinValueValitationDirective implements Validator {
  @Input('appMinValueValitation')
  minValue: number;

  constructor() { }

  validate(control: AbstractControl): ValidationErrors {
    return this.minValueValitation(control);
  }

  minValueValitation(control: AbstractControl) {
    if (control.value != null && (this.minValue > control.value)) {
      return { minValue: this.minValue };
    }

    return null;
  }
}
