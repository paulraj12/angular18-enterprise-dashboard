import { signal, computed } from '@angular/core';

export type Role = 'ADMIN' | 'USER';

export interface User {
  id: number;
  name: string;
  role: Role;
  token: string;
}

const _user = signal<User | null>(null);

export const authStore = {
  user: _user,
  isLoggedIn: computed(() => !!_user()),
  role: computed(() => _user()?.role ?? null)
};
