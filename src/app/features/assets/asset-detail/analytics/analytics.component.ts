import { Component } from '@angular/core';
import { DoughnutChartComponent } from '../../../../components/charts/doughnut-chart/doughnut-chart.component';
import { ECHART } from '../../../../models/chart';
import { CommonModule } from '@angular/common';
import { HalfDoughnutChartComponent } from '../../../../components/charts/half-doughnut-chart/half-doughnut-chart.component';
import { BarChartComponent } from '../../../../components/charts/bar-chart/bar-chart.component';
import { LineChartComponent } from '../../../../components/charts/line-chart/line-chart.component';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [
    CommonModule,
    DoughnutChartComponent,
    HalfDoughnutChartComponent,
    BarChartComponent,
    LineChartComponent
  ],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.scss'
})
export class AnalyticsComponent {

  colors: any[] = ['#F85529', '#FF8C1A', '#FFD965', '#13DEB9'];
  state_of_charges_data: ECHART[] = [
    { value: 50, name: '' },
    { value: 50, name: '' },
  ];
  state_of_health_data: ECHART[] = [
    { value: 50, name: '' },
    { value: 50, name: '' },
  ];
  cycles_data: ECHART[] = [
    { value: 50, name: 'Total Cycles:' },
    { value: 50, name: 'Completed Cycles:' },
  ];
  temperature_data: ECHART[] = [
    { value: 30, name: '' },
    { value: 70, name: '' },
  ];
  energy_consumption_data: ECHART[] = [
    { value: 30, name: '' },
    { value: 70, name: '' },
  ];
  // bank_health_data: any[] = [
  //   [new Date(new Date().getTime() - 7 * 60 * 60 * 1000), 65],
  //   [new Date(new Date().getTime() - 6 * 60 * 60 * 1000), 85],
  //   [new Date(new Date().getTime() - 5 * 60 * 60 * 1000), 55],
  //   [new Date(new Date().getTime() - 4 * 60 * 60 * 1000), 65],
  //   [new Date(new Date().getTime() - 3 * 60 * 60 * 1000), 50],
  //   [new Date(new Date().getTime() - 2 * 60 * 60 * 1000), 80],
  //   [new Date().getTime(), 90]
  // ];
  // bank_health_data: any[] = [
  //   ['2024-03-06 00:00', -10],
  //   ['2024-03-06 01:00', -5],
  //   ['2024-03-06 02:00', 55],
  //   ['2024-03-06 03:00', 65],
  //   ['2024-03-06 04:00', 50],
  //   ['2024-03-06 05:00', 80],
  //   ['2024-03-06 06:00', 70],
  //   ['2024-03-06 07:00', 90],
  //   ['2024-03-06 08:00', 75],
  //   ['2024-03-06 09:00', 90],
  //   ['2024-03-06 10:00', 100],
  //   ['2024-03-06 11:00', 90],
  //   ['2024-03-06 12:00', 90],
  //   ['2024-03-06 13:00', 90],
  //   ['2024-03-06 14:00', 90]
  // ];
  bank_health_data: any[] = [
    ['2024-03-06 00:00', 65],
    ['2024-03-06 01:00', 85],
    ['2024-03-06 02:00', 55],
    ['2024-03-06 03:00', 65],
    ['2024-03-06 04:00', 50],
    ['2024-03-06 05:00', 80],
    ['2024-03-06 06:00', 70]
  ];
  bank_charge_data: any[] = [
    ['2024-03-06 00:00', 65],
    ['2024-03-06 01:00', 85],
    ['2024-03-06 02:00', 55],
    ['2024-03-06 03:00', 65],
    ['2024-03-06 04:00', 50],
    ['2024-03-06 05:00', 80],
    ['2024-03-06 06:00', 70]
  ];
  bank_voltage_data: any[] = [
    ['2024-03-06 00:00', 0.6],
    ['2024-03-06 01:00', 1.1],
    ['2024-03-06 02:00', 1.4],
    ['2024-03-06 03:00', 0.6],
    ['2024-03-06 04:00', 2.2],
    ['2024-03-06 05:00', 1.5],
    ['2024-03-06 06:00', 1.4],
    ['2024-03-07 06:00', 1.3]
  ];
  bank_temperature_data: any[] = [
    ['2024-03-06 00:00', 9],
    ['2024-03-06 01:00', 5],
    ['2024-03-06 02:00', 10],
    ['2024-03-06 03:00', 9],
    ['2024-03-06 04:00', 4],
    ['2024-03-06 05:00', 9],
    ['2024-03-06 06:00', 8],
    ['2024-03-07 06:00', 20]
  ];
  bank_current_data: any[] = [
    ['2024-03-05 00:00', 20],
    ['2024-03-06 00:00', 0],
    ['2024-03-06 01:00', 16],
    ['2024-03-06 02:00', 2],
    ['2024-03-06 03:00', -1],
    ['2024-03-06 04:00', -5],
    ['2024-03-06 05:00', -1],
    ['2024-03-06 06:00', 0],
    ['2024-03-06 07:00', 4],
    ['2024-03-06 08:00', 7],
    ['2024-03-06 09:00', 5],
    ['2024-03-06 10:00', 0],
    ['2024-03-06 11:00', -5],
    ['2024-03-06 12:00', -3],
    ['2024-03-06 13:00', -5],
    ['2024-03-06 14:00', -3],
    ['2024-03-06 15:00', 0],
    ['2024-03-07 17:00', -20],
  ];

  cycles_colors: any[] = ['#5D87FF', '#DFE5EF'];
}
