
import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { authStore } from '../../../core/auth/auth.store';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  user = authStore.user;
  userName = computed(() => authStore.user()?.name ?? 'User');
  role = computed(() => authStore.role());

  stats = [
    { title: 'Total Users', value: 1280 },
    { title: 'Monthly Revenue', value: '₹4.5L' },
    { title: 'Orders', value: 320 },
    { title: 'System Status', value: 'Healthy' }
  ];
}


// import { Component } from '@angular/core';
// import { authStore } from '../../../core/auth/auth.store';

// @Component({
//   selector: 'app-dashboard',
//   standalone: true,
//   imports: [],
//   templateUrl: './dashboard.component.html',
//   styleUrl: './dashboard.component.scss'
// })
// export class DashboardComponent {
// user = authStore.user;
// }
