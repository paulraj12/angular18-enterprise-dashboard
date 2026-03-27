import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  private api = 'https://jsonplaceholder.typicode.com/posts';

  notifications = signal<any[]>([]);
  unreadCount = signal(0);

  constructor(private http: HttpClient) {}

  loadNotifications() {
    this.http.get<any[]>(this.api).subscribe(data => {

      const mapped = data.slice(0, 10).map(n => ({
        ...n,
        read: false
      }));

      this.notifications.set(mapped);
      this.unreadCount.set(mapped.length);
    });
  }

  markAsRead(id: number) {

    const updated = this.notifications().map(n => {
      if (n.id === id && !n.read) {
        this.unreadCount.update(c => c - 1);
        return { ...n, read: true };
      }
      return n;
    });

    this.notifications.set(updated);
  }

}