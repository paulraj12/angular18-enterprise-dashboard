
import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { authStore } from '../auth/auth.store';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);

  if (authStore.isLoggedIn()) {
    console.log('isLoggedIn:', authStore.isLoggedIn());
    return true;
  }

 router.navigateByUrl('/login');
  return false;
};


// import { CanActivateFn } from '@angular/router';
// import { authStore } from '../auth/auth.store';

// export const authGuard: CanActivateFn = () => {
//   return authStore.isLoggedIn();
// };
