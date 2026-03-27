import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuditLogsService } from '../../core/services/audit-logs.service';

@Component({
  selector: 'app-audit-logs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './audit-logs.component.html'
})
export class AuditLogsComponent implements OnInit {

  search = signal('');

  logs = signal<any[]>([]);

  filteredLogs = computed(() => {

    return this.logs().filter(log =>
      log.user.toLowerCase().includes(this.search().toLowerCase())
    );

  });

  constructor(private auditService: AuditLogsService) {
    this.logs.set(this.auditService.logs());
  }

  ngOnInit() {
    this.auditService.loadLogs();
  }

  onSearch(event: any) {
    this.search.set(event.target.value);
  }

}
