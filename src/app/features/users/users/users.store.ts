import { signal, computed } from '@angular/core';

export const page = signal(1);
export const limit = signal(10);
export const search = signal('');

export const usersUrl = computed(() => {
  const skip = (page() - 1) * limit();

  return search()
    ? `https://dummyjson.com/users/search?q=${search()}&limit=${limit()}&skip=${skip}`
    : `https://dummyjson.com/users?limit=${limit()}&skip=${skip}`;
});
