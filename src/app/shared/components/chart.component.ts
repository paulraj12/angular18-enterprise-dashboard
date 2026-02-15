import { Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, ChartConfiguration } from 'chart.js';

@Component({
  standalone: true,
  selector: 'app-chart',
  imports: [CommonModule],
  template: `<canvas #canvas></canvas>`
})
export class ChartComponent implements OnDestroy {

  @ViewChild('canvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;
  @Input() config!: ChartConfiguration;

  private chart!: Chart;

  ngOnInit() {
    this.chart = new Chart(this.canvas.nativeElement, this.config);
  }

  ngOnDestroy() {
    this.chart?.destroy();
  }
}
