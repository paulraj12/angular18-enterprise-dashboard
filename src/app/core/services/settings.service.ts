import { Injectable, signal, effect, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private document = inject(DOCUMENT);

  settings = signal({
    appName: 'Enterprise Dashboard',
    emailNotifications: true,
    twoFactorAuth: false,
    theme: 'dark-theme'
  });

  constructor() {

    effect(() => {

      const theme = this.settings().theme;

      console.log('Applying theme:', theme);

      const body = this.document.body;

      body.classList.remove('light-theme');
      body.classList.remove('dark-theme');

      body.classList.add(theme);

    });

  }

  updateSettings(newSettings: any) {

    this.settings.update(s => ({
      ...s,
      ...newSettings
    }));

  }

}