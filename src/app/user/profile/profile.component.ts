import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  isEditMode: Boolean = false;

  form = this.fb.group({
    username: ['user1'],
    email: ['email1'],
    phone: ['tel1']
  });

  constructor(private fb: FormBuilder) {
    
  }

  saveProfileHandler(): void {
    this.toggleEditMode();
    console.log('Profile saved successfully');
  }

  toggleEditMode(): void {
    this.isEditMode = !this.isEditMode;
  }
}
