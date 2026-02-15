import { signal, computed } from '@angular/core';

export type Role = 'ADMIN' | 'USER'| 'MANAGER'| 'GUEST';

export interface User {
  name: string;
  role: Role;
  token: string;
}

const userSignal = signal<User | null>(null);

export const authStore = {
  // writable signal
  user: userSignal,

  // computed signals
  isLoggedIn: computed(() => !!userSignal()),

  role: computed(() => userSignal()?.role ?? null),

  token: computed(() => userSignal()?.token ?? null)
};
