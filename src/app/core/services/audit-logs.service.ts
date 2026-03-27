import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuditLogsService {

  private api = 'https://jsonplaceholder.typicode.com/comments';

  logs = signal<any[]>([]);

  constructor(private http: HttpClient) {}

  loadLogs() {

    this.http.get<any[]>(this.api).subscribe(data => {

      const mapped = data.slice(0, 20).map(log => ({
        id: log.id,
        user: log.email,
        action: 'Updated Record',
        module: 'Users',
        message: log.body,
        date: new Date().toLocaleString()
      }));

      this.logs.set(mapped);

    });

  }

}