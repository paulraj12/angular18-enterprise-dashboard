import { Component } from '@angular/core';
import { RolesService } from '../../core/services/roles.service';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.scss'
})
export class RolesComponent {
   roles: any[] = [];

  constructor(private rolesService: RolesService) {}

  ngOnInit() {
    this.loadRoles();
  }

  loadRoles() {
    this.rolesService.getRoles().subscribe(data => {
      this.roles = data;
    });
  }

}
