
import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { authStore } from './../../core/auth/auth.store';

import { AuthService } from './../../core/services/auth.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <nav *ngIf="isLoggedIn()" class="navbar navbar-expand navbar-dark bg-dark px-3">

  <!-- <a class="navbar-brand" routerLink="/">Enterprise App</a> -->

  <div class="navbar-nav">
    <a
      class="nav-link"
      routerLink="/"
      routerLinkActive="active"
    >
      Dashboard
    </a>

    <!-- ADMIN ONLY -->
    <a
      *ngIf="isAdmin()"
      class="nav-link"
      routerLink="/users"
      routerLinkActive="active"
    >
      Users
    </a>
  </div>

  <button class="btn btn-outline-light ms-auto" (click)="logout()">
    Logout
  </button>
</nav>

  `,
  styles: [`
    .navbar .nav-link.active {
      font-weight: bold;
      border-bottom: 2px solid white;
}
  `]

})
export class MenuComponent {
  isLoggedIn = computed(() => authStore.isLoggedIn());
  isAdmin = computed(() => authStore.role() === 'ADMIN');
  constructor(private auth: AuthService) { }

  logout() {
    this.auth.logout();
  }
}

