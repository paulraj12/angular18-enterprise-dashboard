import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsService } from '../../core/services/notifications.service';
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './notifications.component.html'
})
export class NotificationsComponent implements OnInit {

  notifications: any;

  constructor(private notificationService: NotificationsService) {}

  ngOnInit() {
    this.notifications = this.notificationService.notifications;
    this.notificationService.loadNotifications();
  }

  markAsRead(id: number) {
    this.notificationService.markAsRead(id);
  }

}