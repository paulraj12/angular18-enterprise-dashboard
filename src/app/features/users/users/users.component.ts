
import { Component, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  image: string;
  gender: string;
  age: number;
}

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  users = signal<User[]>([]);
  selectedUser = signal<User | null>(null);
  loading = signal(true);

  constructor(private http: HttpClient) {
    effect(() => {
      this.http
        .get<{ users: User[] }>('https://dummyjson.com/users')
        .subscribe(res => {
          this.users.set(res.users);
          this.loading.set(false);
        });
    });
  }

  selectUser(user: User) {
    this.selectedUser.set(user);
  }
}


// import { HttpClient } from '@angular/common/http';
// import { Component, effect } from '@angular/core';
// import {usersUrl, search, page} from './users.store';

// @Component({
//   selector: 'app-users',
//   standalone: true,
//   imports: [],
//   templateUrl: './users.component.html',
//   styleUrl: './users.component.scss'
// })
// export class UsersComponent {
//   users: any[] = [];

//   constructor(private http: HttpClient) {
//     effect(() => {
//       this.http.get<any>(usersUrl()).subscribe(res => {
//         this.users = res.users;
//       });
//     });
//   }

//   onSearch(e: any) {
//     search.set(e.target.value);
//   }
// }