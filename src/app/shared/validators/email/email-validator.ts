import { ValidatorFn } from "@angular/forms";


export function emailValidator(domains: string[]): ValidatorFn {

    // [^@]{6,}@gmail\.(bg|com)$
    const domainString = domains.join('|');

    const regEx = new RegExp(`[^@]{6,}@gmail\.(${domainString})$`);
    
    return (control) => {
        return control.value ==="" ||
        regEx.test(control.value)
        ? null: {emailValidator: true};
    };
}