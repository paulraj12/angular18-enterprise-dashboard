import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { roleGuard } from './core/guards/role.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: '',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/dashboard/dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  {
    path: 'users',
    canActivate: [authGuard, roleGuard('ADMIN')],
    loadComponent: () =>
      import('./features/users/users/users.component')
        .then(m => m.UsersComponent)
  },
  {
    path: 'roles',
    loadComponent: () =>
      import('./features/roles/roles.component')
        .then(m => m.RolesComponent)
  },
  {
    path: 'notifications',
    loadComponent: () =>
      import('./features/notifications/notifications.component')
        .then(m => m.NotificationsComponent)
  },
  {
    path: 'audit-logs',
    loadComponent: () =>
      import('./features/audit-logs/audit-logs.component')
        .then(m => m.AuditLogsComponent)
  },
  {
    path: 'tasks',
    loadComponent: () =>
      import('./features/tasks/tasks.component')
        .then(m => m.TasksComponent)
  },
  {
    path: 'reports',
    loadComponent: () =>
      import('./features/reports/reports.component')
        .then(m => m.ReportsComponent)
  },
  {
    path: 'settings',
    loadComponent: () =>
      import('./features/settings/settings.component')
        .then(m => m.SettingsComponent)
  }






  // {
  //   path: 'users',
  //   canActivate: [authGuard, roleGuard('ADMIN')],
  //   loadComponent: () =>
  //     import('./features/users/users/users.component').then(m => m.UsersComponent)
  // }
];