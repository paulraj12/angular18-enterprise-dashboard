import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsService } from '../../core/services/reports.service';
import Chart from 'chart.js/auto';
import { ChartComponent } from "../../shared/components/chart.component";

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule, ChartComponent],
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit, AfterViewInit {

  chart: any;

  get reports() {
    return this.reportsService.reports;
  }

  constructor(private reportsService: ReportsService) {}

  ngOnInit() {
    this.reportsService.loadReports();
  }

  ngAfterViewInit() {
    setTimeout(() => this.createChart(), 500);
  }

  createChart() {

    const labels = this.reports().map(r => `Report ${r.id}`);
    const data = this.reports().map(r => r.views);

    this.chart = new Chart("reportChart", {

      type: 'bar',

      data: {
        labels: labels,
        datasets: [
          {
            label: 'Views',
            data: data
          }
        ]
      }

    });

  }

}