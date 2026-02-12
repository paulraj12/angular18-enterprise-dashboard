import { HttpInterceptorFn } from '@angular/common/http';
import { authStore } from '../auth/auth.store';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = authStore.token();

  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  return next(req);
};






//“Angular 18 supports functional interceptors which are tree-shakable.”