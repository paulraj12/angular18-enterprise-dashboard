import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';
import { Role } from '../../../core/auth/auth.store';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {

  username = signal('Paulraj');
  role = signal<Role>('USER');

  constructor(private authService: AuthService) {}

login() {
    console.log('LOGIN CLICKED'); // 🔍 debug proof

    if (!this.username() || !this.role()) {
      alert('Please enter username and select role');
      return;
    }

    this.authService.login(this.username(), this.role());
  }

  onUsernameChange(value: string) {
    this.username.set(value);
  }

  onRoleChange(value: Role) {
    this.role.set(value);
  }
}


