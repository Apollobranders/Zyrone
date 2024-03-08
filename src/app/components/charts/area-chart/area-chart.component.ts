import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EChartsOption } from 'echarts';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';

@Component({
  selector: 'app-area-chart',
  standalone: true,
  imports: [NgxEchartsDirective],
  templateUrl: './area-chart.component.html',
  styleUrl: './area-chart.component.scss'
})
export class AreaChartComponent {


  chartOption: EChartsOption =  {
    xAxis: {
      data: ['A', 'B', 'C', 'D', 'E']
    },
    yAxis: {},
    series: [
      {
        data: [10, 22, 28, 23, 19],
        type: 'line',
        areaStyle: {}
      },
      {
        data: [25, 14, 23, 35, 10],
        type: 'line',
        areaStyle: {
          color: '#ff0',
          opacity: 0.5
        }
      }
    ]
  };
}
