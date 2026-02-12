
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { authStore, Role } from '../auth/auth.store';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) {}

  /**
   * Login user
   * (currently mocked – can be replaced with real API)
   */
  login(role: Role = 'ADMIN'): void {
    // Simulated login response
    authStore.user.set({
      name: 'Paulraj',
      role: role,
      token: 'dummy-jwt-token-12345'
    });

    // Navigate to dashboard after login
    this.router.navigateByUrl('/');
  }

  /**
   * Logout user
   */
  logout(): void {
    authStore.user.set(null);
    this.router.navigateByUrl('/login');
  }

  /**
   * Utility helpers (optional but useful)
   */
  isLoggedIn(): boolean {
    return authStore.isLoggedIn();
  }

  getRole(): Role | null {
    return authStore.role();
  }

  getToken(): string | null {
    return authStore.token();
  }
}






// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { authStore } from '../auth/auth.store';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   constructor(private http: HttpClient) { }

//   login(email: string, password: string) {
//     return this.http.post<any>('https://reqres.in/api/login', {
//       email,
//       password
//     }).subscribe(res => {
//       authStore.user.set({
//         id: 1,
//         name: 'Admin User',
//         role: 'ADMIN',
//         token: res.token
//       });
//     });
//   }

//   logout() {
//     authStore.user.set(null);
//   }
// }

