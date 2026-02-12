
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from './../../core/services/auth.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink],
  template: `
    <nav  style="background:#1976d2;padding:10px">
      <a routerLink="/" style="color:white;margin-right:10px">Dashboard</a>
      <a routerLink="/users" style="color:white;margin-right:10px">Users</a>
      <button (click)="logout()">Logout</button>
    </nav>
  `,
  
})
export class MenuComponent {
  constructor(private auth: AuthService) {}

  logout() {
    this.auth.logout();
  }
}


// import { Component } from '@angular/core';
// import { RouterLink, RouterLinkActive } from '@angular/router';
// import { authStore } from '../../core/auth/auth.store';

// @Component({
//   selector: 'app-menu',
//   standalone: true,
//   imports: [RouterLink, RouterLinkActive],
//   template: `
//     <nav class="menu">
//       <a routerLink="/" routerLinkActive="active">Dashboard</a>

//       @if (role() === 'ADMIN') {
//         <a routerLink="/users" routerLinkActive="active">Users</a>
//       }

//       <button (click)="logout()">Logout</button>
//     </nav>
//   `,
//   styles: [`
//     .menu {
//       display: flex;
//       gap: 16px;
//       padding: 12px;
//       background: #1976d2;
//       color: white;
//     }
//     a { color: white; text-decoration: none; }
//     .active { font-weight: bold; text-decoration: underline; }
//     button { margin-left: auto; }
//   `]
// })
// export class MenuComponent {
//   role = authStore.role;

//   logout() {
//     authStore.user.set(null);
//   }
// }
