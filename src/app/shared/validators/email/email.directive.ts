import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';
import { emailValidator } from './email-validator';

@Directive({
  selector: "[appEmail]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: AppEmailDirective,
      multi: true
    }
  ]
})
export class AppEmailDirective implements Validator, OnChanges {
 @Input() appEmail: string[] = [];
 
 validator: ValidatorFn = () => null;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    const currentEmailChanges = changes["appEmail"];
    if(currentEmailChanges){
      this.validator = emailValidator(currentEmailChanges.currentValue);
    }
  }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return this.validator(control);
  }

}
