import { Component } from '@angular/core';
import { UtilService } from '../../../services/util.service';
import echarts from 'echarts/types/dist/echarts';

@Component({
  selector: 'app-dark-light-theme',
  standalone: true,
  imports: [],
  templateUrl: './dark-light-theme.component.html',
  styleUrl: './dark-light-theme.component.scss'
})
export class DarkLightThemeComponent {

  constructor(
    private utilService: UtilService
  ) { }

  onToggleThemeMode = (e: any) => {
    const { getSystemTheme, setConfig, resize, changeTheme } = this.utilService;
    (document.body as HTMLElement).setAttribute('data-bs-theme', e.target.checked?'dark':'');
    let value = e.target[e.target.type === 'checkbox' ? 'checked' : 'value'];
    typeof value === 'boolean' && (value = value ? 'dark' : 'light');

    const control = 'themeMode';
    setConfig({
      [control]: value
    });
    window.history.replaceState(null, '', window.location.pathname);
    document.documentElement.setAttribute(
      'data-bs-theme',
      value === 'auto' ? getSystemTheme() : value
    );
    // document.documentElement.classList[
    //   value === 'dark' ? 'add' : 'remove'
    // ]('dark');
    const clickControl = new CustomEvent('clickControl', {
      detail: { control, value }
    });
    e.currentTarget.dispatchEvent(clickControl);
    changeTheme(document.body);

    const chartDom = document.querySelectorAll('.doughnut-chart');
    const multiDoughnutChart = document.querySelectorAll('.multi-doughnut-chart');

    let options1 = {
      series: [
       {
         itemStyle: {
           borderColor: '#fff',
           borderWidth: 0
         },
       }
      ]
    }
    let options2 = {
      series: [
       {
         itemStyle: {
           borderColor: '#2A3547',
           borderWidth: 3
         },
       },
       {
        itemStyle: {
          borderColor: '#2A3547',
          borderWidth: 3
        },
      },
      {
        itemStyle: {
          borderColor: '#2A3547',
          borderWidth: 3
        },
      },
      {
        itemStyle: {
          borderColor: '#2A3547',
          borderWidth: 3
        },
      }
      ]
    }
    if(value == 'light') {
      options1 = {
        series: [
         {
           itemStyle: {
             borderColor: '#fff',
             borderWidth: 3
           },
         }
        ]
      }
      options2 = {
        series: [
         {
           itemStyle: {
             borderColor: '#fff',
             borderWidth: 3
           },
         },
         {
          itemStyle: {
            borderColor: '#fff',
            borderWidth: 3
          },
        },
        {
          itemStyle: {
            borderColor: '#fff',
            borderWidth: 3
          },
        },
        {
          itemStyle: {
            borderColor: '#fff',
            borderWidth: 3
          },
        }
        ]
      }
    }
    //this.utilService.updateCharts(chartDom, options1);
    //this.utilService.updateCharts(multiDoughnutChart, options2);

  }

}
