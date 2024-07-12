import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Post } from '../types/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {
  postsList: Post[] = [];
  isLoading: boolean = true;
  // thereAreNoPosts: boolean = false;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getPosts().subscribe({
      next: (themes) => {
        this.postsList = themes;

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
