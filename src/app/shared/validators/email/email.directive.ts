import { Directive, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { AbstractControl, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';
import { emailValidator } from './email-validator';

@Directive({
  selector: "[appEmail]"
})
export class EmailDirective implements Validator, OnChanges {
 @Input() appEmail: string[] = [];
 
 validator: ValidatorFn = () => null;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    const currentEmailChanges = changes["appEmail"];
    if(currentEmailChanges){
      emailValidator(currentEmailChanges.currentValue);
    }
  }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    throw new Error('Method not implemented.');
  }

  registerOnValidatorChange?(fn: () => void): void {
    throw new Error('Method not implemented.');
  }

}
