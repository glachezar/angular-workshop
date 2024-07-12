import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { Theme } from './types/theme';
import { Post } from './types/post';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http:HttpClient) { }

  getPosts(limit?: number) {
    const {apiUrl} = environment;
    const limitFilter = limit ? `?limit=${limit}` : '';
    return this.http.get<Post[]>(`${apiUrl}posts${limitFilter}`);
  }

  getThemes() {
    const {apiUrl} = environment;
    return this.http.get<Theme[]>(`${apiUrl}themes`);
  }
}
