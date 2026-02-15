
import { Component, computed, effect, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { authStore } from '../../../core/auth/auth.store';
import { DashboardService } from '../../../core/services/dashboard.service';
import { ChartConfiguration } from 'chart.js';
import { ChartComponent } from '../../../shared/components/chart.component';



@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, ChartComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  usersChart!: ChartConfiguration<'line'>;
  revenueChart!: ChartConfiguration<'bar'>;
  ordersChart!: ChartConfiguration<'doughnut'>;
  systemStatusChart!: ChartConfiguration<'doughnut'>;

  // Auth
  userName = computed(() => authStore.user()?.name ?? 'User');
  role = computed(() => authStore.role());
  isManager = computed(() => this.role() === 'MANAGER');

  // Dashboard state
  stats = signal<any[]>([]);
  activities = signal<string[]>([]);
  loading = signal(true);


  constructor(private dashboardService: DashboardService) {
    this.loadDashboard();

    // Auto-refresh every 30 sec (enterprise touch)
    effect(() => {
      setInterval(() => this.loadDashboard(), 30000);
    });
  }

  ngOnInit(): void {

    // 🔹 Line Chart – Users Growth
    this.usersChart = {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
          { label: 'Users', data: [200, 400, 700, 1000, 1280] }
        ]
      }
    };

    // 🔹 Bar Chart – Revenue



    this.revenueChart = {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
          {
            label: 'Monthly Revenue',
            data: [120000, 180000, 260000, 380000, 450000]
          }
        ]
      }
    };

    // 🔹 Doughnut Chart – Orders
    this.ordersChart = {
      type: 'doughnut',
      data: {
        labels: [
          'Completed Orders',
          'Pending Orders',
          'Cancelled Orders',
          'Returned Orders'
        ],
        datasets: [
          {
            data: [320, 120, 45, 30]
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        //cutout: '75%' // thickness of doughnut
      }
    };

    // system status and latency can be added as a separate card in the template, no chart needed
    this.systemStatusChart = {
      type: 'doughnut',
      data: {
        labels: ['Healthy', 'Remaining Capacity'],
        datasets: [
          {
            data: [90, 10] // 90% healthy
          }
        ]
      },
      options: {
        //cutout: '75%',
        plugins: {
          legend: {
            position: 'top'
          }
        }
      }
    };



  }


  loadDashboard() {
    this.loading.set(true);

    this.dashboardService.getDashboard().subscribe(data => {
      this.stats.set(data.stats);
      this.activities.set(data.activities);
      this.loading.set(false);
    });
  }

  isAdmin(): boolean {
    return this.role() === 'ADMIN';
  }
}
