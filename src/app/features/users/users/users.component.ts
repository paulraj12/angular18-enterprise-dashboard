import { HttpClient } from '@angular/common/http';
import { Component, effect } from '@angular/core';
import {usersUrl, search, page} from './users.store';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  users: any[] = [];

  constructor(private http: HttpClient) {
    effect(() => {
      this.http.get<any>(usersUrl()).subscribe(res => {
        this.users = res.users;
      });
    });
  }

  onSearch(e: any) {
    search.set(e.target.value);
  }
}