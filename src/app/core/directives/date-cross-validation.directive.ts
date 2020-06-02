import { Directive, Input } from '@angular/core';
import { FormControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appDateCrossValidation]',
  providers: [{ provide: NG_VALIDATORS, useExisting: DateCrossValidationDirective, multi: true }]
})
export class DateCrossValidationDirective implements Validator {
  @Input()
  startDateControl: FormControl;

  @Input()
  startDateLabel: string;

  @Input()
  endDateControl: FormControl;

  @Input()
  endDateLabel: string;

  constructor() { }

  validate(): ValidationErrors {
    return this.crossValidation();
  }

  crossValidation() {
    if (this.startDateControl && this.endDateControl && this.startDateControl.value && this.endDateControl.value) {
      const startDateValue = new Date(this.startDateControl.value);
      const endDateValue = new Date(this.endDateControl.value);

      // clear date seconds and milliseconds
      startDateValue.setSeconds(0);
      startDateValue.setUTCMilliseconds(0);
      endDateValue.setSeconds(0);
      endDateValue.setUTCMilliseconds(0);

      if (startDateValue >= endDateValue) {
        return { dateCrossValidationError: { start: this.startDateLabel, end: this.endDateLabel } };
      }
    }

    return null;
  }
}
