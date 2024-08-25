import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private userService: UserService, private routing: Router) {}

  login(form: NgForm): void {
    console.log(form.value);
    // TODO: Form now we are not handling the data. I will do it later.
    this.userService.login();
    this.routing.navigate(['/']);
  }
}
