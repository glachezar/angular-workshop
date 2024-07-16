import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private userService: UserService, private routing: Router) {}

  login(email: string, password: string): void {
    // TODO: Form now we are not handling the data. I will do it later.
    this.userService.login();
    this.routing.navigate(['/']);
  }
}
