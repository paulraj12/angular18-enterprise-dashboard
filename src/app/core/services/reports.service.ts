import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  private api = 'https://jsonplaceholder.typicode.com/posts';

  reports = signal<any[]>([]);

  constructor(private http: HttpClient) {}

  loadReports() {

    this.http.get<any[]>(this.api).subscribe(data => {

      const mapped = data.slice(0, 10).map(item => ({
        id: item.id,
        title: item.title,
        views: Math.floor(Math.random() * 500),
        revenue: Math.floor(Math.random() * 1000)
      }));

      this.reports.set(mapped);

    });

  }

}