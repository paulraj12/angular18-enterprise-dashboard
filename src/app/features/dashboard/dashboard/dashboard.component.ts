import { Component } from '@angular/core';
import { authStore } from '../../../core/auth/auth.store';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
user = authStore.user;
}
