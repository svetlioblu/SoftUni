import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appMaxCount]',
  // !add the following providers
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MaxCountDirective,
      multi: true
    }
  ]
})
// ! implement validator
export class MaxCountDirective implements Validator {
  //! take input
  @Input() appMaxCount: number | undefined

  constructor() { }
  // validate with directive
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    // control value is current input length
    if (this.appMaxCount === undefined || (control.value?.length || 0) <= this.appMaxCount) {
      return null
    }
    return {
      appMaxCount: this.appMaxCount
    }
  }
}
