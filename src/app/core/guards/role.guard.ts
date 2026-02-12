import { CanActivateFn } from '@angular/router';
import { authStore } from '../auth/auth.store';
import { Role } from '../auth/auth.store';

export const roleGuard = (role: Role): CanActivateFn => {
  return () => authStore.role() === role;
};