import { Component } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { emailValidator } from '../../shared/validators/email/email-validator';
import { DEFAULT_EMAIL_DOMAINS } from '../../shared/constants';
import { matchPasswordsValidator } from '../../shared/validators/password/password-match';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  form = this.fb.group({
    email: ['', [Validators.required, emailValidator(DEFAULT_EMAIL_DOMAINS)]],
    username: ['', [Validators.required, Validators.minLength(5)]],
    tel: ['telTest'],
    passGroup: this.fb.group(
      {
        password: ['', [Validators.required, Validators.minLength(5)]],
        rePassword: ['', [Validators.required]],
      },
      {
        validator: [matchPasswordsValidator('password', 'rePassword')],
      }
    ),
  });

  constructor(private fb: FormBuilder) {}

  register(): void {
    if (this.form.invalid) {
      return;
    }
    console.log(this.form.value);
  }
}
