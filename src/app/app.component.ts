import { Component, computed } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { authStore } from './core/auth/auth.store';
import { AuthService } from './core/services/auth.service';
import { MenuComponent } from "./shared/components/menu";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, MenuComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {

  isLoggedIn = computed(() => authStore.isLoggedIn());
  isAdmin = computed(() => authStore.role() === 'ADMIN');

  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}
