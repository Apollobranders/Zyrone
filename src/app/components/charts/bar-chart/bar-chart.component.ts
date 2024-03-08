import { Component, HostListener, Input, SimpleChanges } from '@angular/core';
import { EChartsOption } from 'echarts';
import { NgxEchartsDirective } from 'ngx-echarts';
import * as echarts from 'echarts';
import { UtilService } from '../../../services/util.service';

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [NgxEchartsDirective],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.scss'
})
export class BarChartComponent {
  @Input() label: string = "";
  @Input() type: any = 'value';
  @Input() data: any[] = [];

  width: number = 540;
  height: number = 200;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    if(window.outerWidth < 550) {
      this.width = 250;
      this.height = 150;
    } else {
      this.width = 540;
      this.height = 200;
    }
  }

  now = new Date();
  // Calculate the minimum time by subtracting 12 hours from the current time
  minTime = new Date(this.now.getTime() - 12 * 60 * 60 * 1000);
  maxTime = this.now;


  chartOption: EChartsOption = {};

  constructor(
    //private utilService: UtilService
  ) { }

  ngOnInit() {
    this.checkScreenSize();
  }

  chartInit() {

    const container: any = document.querySelector('.bar-chart');
    const chart = echarts.init(container);

    new ResizeObserver(() => chart.resize()).observe(container);

  }

  ngOnChanges(change: SimpleChanges) {
    if(change['data'].currentValue) {

      if(this.type == 'time') {
        this.chartOption = {
          color: '#5D87FF',
          grid: {
            top: '6',
            right: '0',
            bottom: '17',
            left: '25',
          },
          xAxis: {
            type: 'time',
            min: (new Date(new Date().getTime() - 12 * 60 * 60 * 1000)).getTime(), // Minimum value for the axis
            max: new Date().getTime(),
            //data: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00'],
            show: true,
            boundaryGap: [20, 20],
            gridIndex: 0,
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: false
            },

            //interval: 10,
            splitNumber: 10,
            axisLabel: {
              color: '#5A6A85',
              formatter: '{hh}:{mm}',
              padding: 10,
              align: 'center',
              fontSize: '10'
            }
          },
          yAxis: {
            show: true,
            type: 'value',
            min: 0,
            max: 400,
          },
          series: [
            {
              type: 'bar',
              barWidth: '10px',
              data: this.data,
              color: '#5D87FF',
              itemStyle: {
                borderRadius: 20
              }
            }
          ]
        };
      } else if(this.type == 'value') {
        this.chartOption = {
          tooltip: {
            trigger: 'item',

          },
          grid: {
            top: '10%',
            left: '1%',
            right: '1%',
            bottom: '6%',
            containLabel: true,
          },
          xAxis: {
            type: 'category',
            data: ['1', '2', '3', '4', '5', '6', '7','8','9','10','11','12'],
            offset: 8,
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
          },
          yAxis: {
            show: true,
            type: 'value',
            min: 0,
            max: 400,
            splitLine: {
              show: false
            },
          },
          series: [
            {
              data: [300, 200, 290, 100, 200, 100, 200, 300, 270, 100, 200, 180],
              type: 'bar',
              barWidth: '10px',
              color: '#5D87FF',
              itemStyle: {
                borderRadius: 20
              }
            }
          ]
        };
      } else {
        const data = [[100,-100],[150,-150],[175,-175],[150,-150],[200,-200],[120,-120],[190,-190],[100,-100],[190,-190],[100,-100],[175,-175],[175,-175]];
        const sums = data.map(row => row.reduce((next, current) => next + current, 0));
        this.chartOption = {
          tooltip: {
            trigger: 'item',
            alwaysShowContent: false ,
          },
          legend: {
            show: false
          },
          grid: {
            top: '10%',
            left: '1%',
            right: '1%',
            bottom: '6%',
            containLabel: true,
          },
          xAxis: {
            type: 'category',
            data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10','11','12'],
            axisTick: {
              show: false,
            },
            axisLabel: {
              color: '#5A6A85',
            },
            offset: 8,
            axisLine: {
              show: false,
            }
          },
          yAxis: {
            type: 'value',
            nameGap: 0,
            axisTick: {
              show: false
            },
            splitLine: {
              show: true
            },
            splitNumber: 2,
          },
          series: [
            {
              name: 'Positive',
              type: 'bar',
              stack: 'stack',
              color: '#fff',
              barWidth: '10px',
              tooltip: {
                show: false
              },
              data: data.map(row => row[1]).map(x => 15)
            },  // Middle Space
            {
              name: 'Charge',
              type: 'bar',
              stack: 'stack',
              barWidth: '10px',
              color: '#13DEB9',
              itemStyle: {
                borderRadius: 20
              },
              data: data.map(row => row[0]),
            },
            {
              name: 'Negative',
              type: 'bar',
              stack: 'stack',
              color: '#fff',
              barWidth: '10px',
              tooltip: {
                show: false
              },
              data: data.map(row => row[1]).map(x => -15)
            },  // Middle Space
            {
              name: 'Discharge',
              type: 'bar',
              barWidth: '10px',
              stack: 'stack',
              color: '#FFD965',
              itemStyle: {
                borderRadius: 20
              },
              data: data.map(row => row[1]),

            }
          ]
        };

      }
    }
  }
}
