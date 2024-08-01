import { Component } from '@angular/core';
import { Theme } from '../types/theme';
import { ApiService } from '../api.service';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrl: './themes-list.component.css'
})
export class ThemesListComponent {
  themesList: Theme[] = [];
  isLoading: boolean = true;
  // thereAreNoPosts: boolean = false;

  constructor(private apiService: ApiService, private userService : UserService) {}

  get isLogged(): boolean{
    return this.userService.isLogged
  }

  ngOnInit(): void {
    this.apiService.getThemes().subscribe({
      next: (themes) => {
        this.themesList = themes;

        // if (this.postsList.length === 0) {
        //   this.thereAreNoPosts = true;
        // }

        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false;
        console.error(`Error: ${err}`);
      },
    });
  }
}
