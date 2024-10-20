import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DEFAULT_EMAIL_DOMAINS } from '../../shared/constants';
import { emailValidator } from '../../shared/validators/email/email-validator';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  isEditMode: Boolean = false;

  form = this.fb.group({
    username: ["", [Validators.required, Validators.minLength(5)]],
    email: ["", [Validators.required, emailValidator(DEFAULT_EMAIL_DOMAINS)]],
    phone: [""]
  });

  constructor(private fb: FormBuilder) {
    
  }

  saveProfileHandler(): void {
    if(this.form.invalid){
      return;
    }
    console.log(this.form.value);
    this.toggleEditMode();
  }
 
  cancelEditMode(): void {
    this.form.reset();
    this.toggleEditMode();
  }
  toggleEditMode(): void {
    this.isEditMode = !this.isEditMode;
  }
}
