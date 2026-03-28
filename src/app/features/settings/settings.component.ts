import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsService } from '../../core/services/settings.service';
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

  settings!: any;

  activeTab = signal('general');

  constructor(private settingsService: SettingsService) {
    this.settings = this.settingsService.settings;
  }

  changeTab(tab: string) {
    this.activeTab.set(tab);
  }

  toggleEmailNotifications() {

    const current = this.settings();

    this.settingsService.updateSettings({
      emailNotifications: !current.emailNotifications
    });

  }

  toggleTwoFactor() {

    const current = this.settings();

    this.settingsService.updateSettings({
      twoFactorAuth: !current.twoFactorAuth
    });

  }

  changeTheme(theme: string) {

    this.settingsService.updateSettings({
      theme
    });

  }

}