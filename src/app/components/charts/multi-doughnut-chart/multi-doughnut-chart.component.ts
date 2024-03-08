import { Component, Input, SimpleChanges } from '@angular/core';
import { EChartsOption } from 'echarts';
import { NgxEchartsDirective } from 'ngx-echarts';
import { ECHART } from '../../../models/chart';
import { UtilService } from '../../../services/util.service';

@Component({
  selector: 'app-multi-doughnut-chart',
  standalone: true,
  imports: [NgxEchartsDirective],
  templateUrl: './multi-doughnut-chart.component.html',
  styleUrl: './multi-doughnut-chart.component.scss'
})
export class MultiDoughnutChartComponent {
  @Input() label: string = "";
  @Input() icon: string = "";
  @Input() text: string = "";
  @Input() data: ECHART[] = [];

  chartOption: EChartsOption =  {};

  constructor(
    private utilService: UtilService
  ) { }

  ngOnChanges(change: SimpleChanges) {
    if(change['data'].currentValue) {
      const bg_color = this.utilService.getSystemTheme() == 'light'?'#ffffff':'#2A3547'
      this.chartOption = {
        tooltip: {
          trigger: 'item',
          formatter: '{b}: {c}'
        },
        series: [
          {
            type: 'pie',
            radius: ['80%', '90%'],
            label: {
              show: false,
            },
            itemStyle: {
              borderColor: bg_color,
              borderWidth: 3
            },
            color: ['#13DEB9', '#EAEFF4'],
            data: [
              { value: 30, name: 'Low Risk Positive' },
              { value: 70, name: 'Low Risk Negative' }
            ]
          },
          {
            type: 'pie',
            radius: ['70%', '80%'],
            label: {
              show: false,
            },
            itemStyle: {
              borderColor: bg_color,
              borderWidth: 3
            },
            color: ['#FF8C1A', '#EAEFF4'],
            data: [
              { value: 45, name: 'Moderate Risk Positive' },
              { value: 55, name: 'Moderate Risk Negative' }
            ]
          },
          {
            type: 'pie',
            radius: ['60%', '70%'],
            label: {
              show: false,
            },
            itemStyle: {
              borderColor: bg_color,
              borderWidth: 3
            },
            color: ['#F85529', '#EAEFF4'],
            data: [
              { value: 75, name: 'High Risk Positive' },
              { value: 35, name: 'High Risk Negative' }
            ]
          },
          {
            type: 'pie',
            radius: ['50%', '60%'],
            label: {
              show: false,
            },
            itemStyle: {
              borderColor: bg_color,
              borderWidth: 3
            },
            color: ['#EAEFF4', '#EAEFF4'],
            tooltip: {
              show: false
            },
            data: [
              { value: 100, name: 'None' },
              { value: 0, name: 'None' }
            ]
          }
        ]
      };


    }
  }
}
