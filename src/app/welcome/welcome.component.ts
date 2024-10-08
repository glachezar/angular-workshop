import { Component } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  constructor(private userService: UserService) {}

  get isLoggedIn() {
    return this.userService.isLogged;
  }
}
