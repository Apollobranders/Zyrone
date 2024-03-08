import { Component, Input, SimpleChanges } from '@angular/core';
import { EChartsOption } from 'echarts';
import * as echarts from 'echarts';
import { NgxEchartsDirective } from 'ngx-echarts';

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [NgxEchartsDirective],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.scss'
})
export class LineChartComponent {
  @Input() label: string = "";
  @Input() type: any = 'single'; //single | stack | markLine
  @Input() data: any[] = [];
  @Input() multipleMarkLines: any = true;
  @Input() minMark: number = 0.5;
  @Input() maxMark: number = 2;
  @Input() splitNumber: number = 5;
  @Input() formatter: string = "kW";
  @Input() interval: number = 0.5;
  @Input() width: number = 540;
  @Input() height: number = 280;
  @Input() min: string = "";
  @Input() max: string = "";

  chartOption: EChartsOption = {};

  ngOnChanges(change: SimpleChanges) {
    if(change['data'].currentValue) {

      if(this.type == 'markLine') {

        let markPieces = [
          {
            gt: this.minMark,
            lte: this.maxMark,
            color: '#5D87FF'
          }
        ];

        if(!this.multipleMarkLines) {
          markPieces = [
            {
              gt: this.minMark,
              lte: 0,
              color: '#FFD965'
            },
             {
              gt: 0,
              lte: this.maxMark,
              color: '#13DEB9'
            }
          ];
        }

        this.chartOption =  {
          tooltip: {
            trigger: 'axis',
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
            type: 'time',
            min: this.min,
            max: this.max,
            axisLabel: {
              show: true,
              color: '#5A6A85',
              fontSize: '10',
              align: 'left',
              formatter: function (value, index) {
                  // Format the time label as needed
                  return echarts.format.formatTime('hh:mm', value);
              }
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            offset: 8,
          },
          yAxis: {
            type: 'value',
            splitNumber: this.splitNumber,
            interval: this.interval,
            axisLabel: {
              color: '#5A6A85',
              formatter: '{value}'+this.formatter,
              fontSize: '10'
            }

          },
          visualMap: {
            top: 50,
            right: 10,
            show: false,
            pieces: markPieces,
            outOfRange: {
              color: '#F85529'
            }
          },
          series: [
            {
              data: this.data,
              type: 'line',
              smooth: true,
              markLine: {
                data: [
                    {
                        yAxis: this.maxMark, // Value for the first mark line
                        lineStyle: {
                            color: '#F85529' // Color for the first mark line
                        },

                    },
                    {
                        yAxis: this.minMark, // Value for the second mark line
                        lineStyle: {
                            color: '#F85529' // Color for the second mark line
                        }
                    }
                ],
                symbol: 'none',
                lineStyle: {
                  type: [60, 1],
                  dashOffset: 20
                }
              },
              lineStyle: {
                width: 2, // Adjust line width as needed
                //color: ['#5470c6', '#91cc75']
              }
            }
          ]
        };
      } else if (this.type == 'stack') {
        this.chartOption = {
          tooltip: {
            trigger: 'axis'
          },
          grid: {
            top: '10%',
            left: '1%',
            right: '1%',
            bottom: '6%',
            containLabel: true,
          },
          xAxis: {
            type: 'time',
            splitNumber: 15,
            min: '2024-03-06 00:00',
            max: '2024-03-06 15:00',
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
             offset: 8,
           axisLabel: {
                    show: true,
                    color: '#5A6A85',
                    fontSize: '10',
                    align: 'left',
                    formatter: function (value, index) {
                        // Format the time label as needed
                        return echarts.format.formatTime('hh:mm', value);
                    }
                  },
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              color: '#5A6A85',
              formatter: '{value}C',
              fontSize: '10'
            }
          },
          series: [
            {
              name: 'Highest',
              type: 'line',
              smooth: true,
              data: [
              ['2024-03-06 00:00', -10],
              ['2024-03-06 01:00', 0],
              ['2024-03-06 02:00', -1],
              ['2024-03-06 03:00', 0],
              ['2024-03-06 04:00', 4],
              ['2024-03-06 05:00', 5],
              ['2024-03-06 06:00', 4],
              ['2024-03-06 07:00', 1],
              ['2024-03-06 08:00', 6],
              ['2024-03-06 09:00', 10],
              ['2024-03-06 10:00', 8],
              ['2024-03-06 11:00', 5],
              ['2024-03-06 12:00', 4],
              ['2024-03-06 13:00', 1],
              ['2024-03-06 14:00', -3],
               ['2024-03-06 15:00', -12]
              ],
              color: '#49BEFF'
            },
            {
              name: 'Lowest',
              type: 'line',
               smooth: true,
              data: [
              ['2024-03-06 00:00', -10],
              ['2024-03-06 01:00', -3],
              ['2024-03-06 02:00', -4],
              ['2024-03-06 03:00', -8],
              ['2024-03-06 04:00', -5],
              ['2024-03-06 05:00', 0],
              ['2024-03-06 06:00', -5],
              ['2024-03-06 07:00', -4],
              ['2024-03-06 08:00', -6],
              ['2024-03-06 09:00', -8],
              ['2024-03-06 10:00', 0],
              ['2024-03-06 11:00', -5],
              ['2024-03-06 12:00', -4],
              ['2024-03-06 13:00', -1],
              ['2024-03-06 14:00', -6],
               ['2024-03-06 15:00', -12]
              ]
            }
          ]
        };
      } else {
        this.chartOption =  {
          tooltip: {
            trigger: 'axis',
          },
          grid: {
            top: '10%',
            left: '1%',
            right: '1%',
            bottom: '6%',
            containLabel: true,
          },
          xAxis: {
            type: 'time',
            min: this.min,
            max: this.max,
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            offset: 8,
            axisLabel: {
              show: true,
              color: '#5A6A85',
              fontSize: '10',
              align: 'left',
              formatter: function (value, index) {
                  // Format the time label as needed
                  return echarts.format.formatTime('hh:mm', value);
              }
            },
          },
          yAxis: {
            type: 'value',
            splitNumber: 5,
            interval: 25,
            axisLabel: {
              color: '#5A6A85',
              formatter: '{value}%',
              fontSize: '10'
            }

          },
          series: [
            {
              data: this.data,
              type: 'line',
              smooth: true,
            }
          ]
        };
      }
    }
  }

}
