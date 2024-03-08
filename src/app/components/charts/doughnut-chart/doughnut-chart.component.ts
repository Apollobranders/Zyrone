import { Component, Input, SimpleChanges } from '@angular/core';
import { EChartsOption } from 'echarts';
import { NgxEchartsDirective } from 'ngx-echarts';
import { ECHART } from '../../../models/chart';
import { getInstanceByDom, connect } from 'echarts';
import { UtilService } from '../../../services/util.service';
import * as echarts from 'echarts';

@Component({
  selector: 'app-doughnut-chart',
  standalone: true,
  imports: [NgxEchartsDirective],
  templateUrl: './doughnut-chart.component.html',
  styleUrl: './doughnut-chart.component.scss'
})
export class DoughnutChartComponent {

  @Input() label: string = "";
  @Input() text: string = "";
  @Input() icon: string = "";
  @Input() data: ECHART[] = [];
  @Input() colors: any[] = [];

  chartOption: EChartsOption = {};

  constructor(
    private utilService: UtilService
  ) { }


  chartInit() {

    const chartDom = document.querySelector('.doughnut-chart') as HTMLElement;
    let chart = echarts.getInstanceByDom(chartDom);
    this.utilService.resize(() => {
      if (chart) {
        chart.resize();
        // if (responsiveOptions) {
        //   handleResize(responsiveOptions);
        // }
      }
    });

  }

  ngOnInit(): void {

  }

  ngOnChanges(change: SimpleChanges) {
    if(change['data'].currentValue) {

      this.chartOption = {
        tooltip: {
          trigger: 'item'
        },
        series: [
          {
            type: 'pie',
            radius: ['76%', '90%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
            },
            color: this.colors,
            data: this.data
          }
        ],

      };


    }
  }
}
