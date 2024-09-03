import { ValidatorFn } from "@angular/forms";


export function emailValidator(domains: string[]): ValidatorFn {

    const domainString = domains.join('|');

    const regEx = new RegExp(`[^@]{5,}@gmail\.(${domainString})$`);

    return (control) => {
        return control.value ==="" ||
        regEx.test(control.value)
        ? null: {emailValidator: true};
    };
}