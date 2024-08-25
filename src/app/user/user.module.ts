import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule } from '@angular/router';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent
  ]
})
export class UserModule { }
