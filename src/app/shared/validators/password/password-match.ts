import { FormGroup, ValidatorFn } from "@angular/forms";

export function matchPasswordsValidator(pass1Value: string, pass2Value: string): ValidatorFn {
    return (control) => {
        const group = control as FormGroup;
        const passCtr1 = group.get(pass1Value);
        const passCtr2 = group.get(pass2Value);
        return passCtr1?.value === passCtr2?.value ? null : { matchPasswordsValidator: true };
    };
}