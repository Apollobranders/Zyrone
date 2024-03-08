import { Component, Input, SimpleChanges } from '@angular/core';
import { ECHART } from '../../../models/chart';
import { EChartsOption } from 'echarts';
import { UtilService } from '../../../services/util.service';
import { NgxEchartsDirective } from 'ngx-echarts';

@Component({
  selector: 'app-half-doughnut-chart',
  standalone: true,
  imports: [NgxEchartsDirective],
  templateUrl: './half-doughnut-chart.component.html',
  styleUrl: './half-doughnut-chart.component.scss'
})
export class HalfDoughnutChartComponent {
  @Input() label: string = "";
  @Input() icon: string = "";
  @Input() text: string = "";
  @Input() data: ECHART[] = [];
  @Input() colors: any[] = [];

  chartOption: EChartsOption =  {};
  chartOption2: EChartsOption =  {};


  constructor(
    private utilService: UtilService
  ) { }

  chartInit() {

    // const chartDom = document.querySelector('.doughnut-chart') as HTMLElement;
    // let chart = echarts.getInstanceByDom(chartDom);
    // this.utilService.resize(() => {
    //   if (chart) {
    //     chart.resize();
    //     // if (responsiveOptions) {
    //     //   handleResize(responsiveOptions);
    //     // }
    //   }
    // });

  }

  ngOnChanges(change: SimpleChanges) {
    if(change['data'].currentValue) {
      const bg_color = this.utilService.getSystemTheme() == 'light'?'#ffffff':'#2A3547'
      this.chartOption = {
        legend: {
          show: false,
        },

        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['66%', '80%'],
            center: ['50%', '70%'],
            label: {
              show: false,
            },
            emphasis: {
              disabled: true
            },
            color: ['#5D87FF', '#DFE5EF'],
            // adjust the start and end angle
            startAngle: 180,
            endAngle: 360,
            data: this.data
          }
        ]
      };
      this.chartOption2 = {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          show: false,
        },
        emphasis: {
          disabled: true
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['94%', '90%'],
            center: ['50%', '70%'],
            label: {
              show: false,
            },
            // adjust the start and end angle
            startAngle: 180,
            endAngle: 360,
            color: this.colors,
            data: [
              { value: 25, name: 'Search Engine' },
              { value: 25, name: 'Direct' },
              { value: 25, name: 'Email' },
              { value: 25, name: 'Union Ads' },
            ]
          }
        ]
      };


    }
  }


}
