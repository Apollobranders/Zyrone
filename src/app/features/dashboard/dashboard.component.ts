import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AreaChartComponent } from '../../components/charts/area-chart/area-chart.component';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';
import { DoughnutChartComponent } from '../../components/charts/doughnut-chart/doughnut-chart.component';
import { BarChartComponent } from '../../components/charts/bar-chart/bar-chart.component';
import { MultiDoughnutChartComponent } from '../../components/charts/multi-doughnut-chart/multi-doughnut-chart.component';
import { ECHART } from '../../models/chart';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    AreaChartComponent,
    DoughnutChartComponent,
    BarChartComponent,
    MultiDoughnutChartComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  colors: any[] = ['#F85529', '#FF8C1A', '#FFD965', '#13DEB9'];
  state_of_charges_data: ECHART[] = [
    { value: 40, name: 'Bad:' },
    { value: 60, name: 'Warning:' },
    { value: 50, name: 'Moderate:' },
    { value: 30, name: 'Full Charge:' },
  ];
  state_of_health_data: ECHART[] = [
    { value: 40, name: 'Bad:' },
    { value: 60, name: 'Warning:' },
    { value: 50, name: 'Moderate:' },
    { value: 30, name: 'Full Charge:' },
  ];
  daily_alerts_data: any[] = [
    [new Date(new Date().getTime() - 11 * 60 * 60 * 1000), 400],
    [new Date().getTime(), 300]
  ]

}
