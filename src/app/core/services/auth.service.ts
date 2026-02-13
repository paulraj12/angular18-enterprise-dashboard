
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { authStore, Role } from '../auth/auth.store';

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(private router: Router) { }

  login(username: string, role: Role) {
    authStore.user.set({
      name: username,
      role,
      token: 'jwt-token-' + Date.now()
    });

    this.router.navigateByUrl('/');   
  }

  logout() {
    authStore.user.set(null);

    localStorage.removeItem('user');
    this.router.navigateByUrl('/login');
  }
}


