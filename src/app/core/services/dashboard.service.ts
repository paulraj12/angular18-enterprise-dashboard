import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class DashboardService {

  getDashboard() {
    return of({
      stats: [
        { title: 'Total Users', value: 1280, trend: +8.4 },
        { title: 'Monthly Revenue', value: 450000, trend: -2.1 },
        { title: 'Orders', value: 320, trend: +12 },
        { title: 'System Status', value: 'Healthy', latency: '180ms' }
      ],
      charts: {
        users: [200, 400, 700, 1000, 1280],
        revenue: [120000, 180000, 260000, 380000, 450000],
        orders: [50, 70, 90, 110]
      },
      activities: [
        'User logged in',
        'Dashboard accessed',
        'Auth token validated',
        'Orders fetched from API'
      ]
    }).pipe(delay(1000));
  }
}
