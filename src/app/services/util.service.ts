import { Injectable } from '@angular/core';
import { ECharts, EChartsOption } from 'echarts';
import * as echarts from 'echarts';

const camelize = (str: string) => {
  const text = str.replace(/[-_\s.]+(.)?/g, (_, c) =>
    c ? c.toUpperCase() : ''
  );
  return `${text.substr(0, 1).toLowerCase()}${text.substr(1)}`;
};

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  initialConfig = {
    isNavbarVerticalCollapsed: false,
    themeMode: 'light',
    navbarTopStyle: 'default',
    navbarVerticalStyle: 'default',
    navbarPosition: 'vertical',
    navbarTopShape: 'default',
    isRTL: false
  };

  config: any = { ...this.initialConfig };

  constructor() {

    Object.keys(this.config).forEach(key => {

      if (localStorage.getItem(key) === null) {
        localStorage.setItem(key, this.config[key]);
      } else {
        try {
          this.setConfig({
            [key]: JSON.parse(localStorage.getItem(key)!)
          });
        } catch {
          this.setConfig({
            [key]: localStorage.getItem(key)
          });
        }
      }
    });

    if (!!JSON.parse(localStorage.getItem('isNavbarVerticalCollapsed')!)) {
      document.documentElement.classList.add('navbar-vertical-collapsed');
    }
    if (localStorage.getItem('themeMode') === 'dark') {
      document.documentElement.setAttribute('data-bs-theme', 'dark');
    } else if (localStorage.getItem('themeMode') === 'auto') {
      document.documentElement.setAttribute(
        'data-bs-theme',
        window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      );
    }

  }

  setConfig = (payload: any, persist = true) => {
    Object.keys(payload).forEach(key => {
      this.config[key] = payload[key];
      if (persist) {
        localStorage.setItem(key, payload[key]);
      }
    });
  };
  resetConfig = () => {
    const initialConfig: any = this.initialConfig;
    Object.keys(this.initialConfig).forEach(key => {
      this.config[key] = initialConfig[key];
      localStorage.setItem(key, initialConfig[key]);
    });
  };

  resize = (fn: (this: Window, ev: UIEvent) => any) => window.addEventListener('resize', fn);

  getItemFromStore = (key: string, defaultValue: any, store = localStorage) => {
    try {
      return JSON.parse(store.getItem(key)!) || defaultValue;
    } catch {
      return store.getItem(key) || defaultValue;
    }
  };
  setItemToStore = (key: string, payload: any, store = localStorage) => store.setItem(key, payload);

  getData = (el: { dataset: { [x: string]: any; }; }, data: any) => {
    try {
      return JSON.parse(el.dataset[camelize(data)]);
    } catch (e) {
      return el.dataset[camelize(data)];
    }
  };
  getSystemTheme = (): string =>  document.documentElement.getAttribute('data-bs-theme') ? 'dark' : 'light';
  changeTheme = (element: any) => {
    element
      .querySelectorAll('[data-theme-control = "themeMode"]')
      .forEach((el: any) => {
        const inputDataAttributeValue = this.getData(el, 'theme-control');
        const localStorageValue = this.getItemFromStore(inputDataAttributeValue, null, undefined);
        if (el.type === 'checkbox') {
          if (localStorageValue === 'auto') {
            this.getSystemTheme() === 'dark'
              ? (el.checked = true)
              : (el.checked = false);
          } else {
            localStorageValue === 'dark'
              ? (el.checked = true)
              : (el.checked = false);
          }
        } else if (el.type === 'radio') {
          localStorageValue === el.value
            ? (el.checked = true)
            : (el.checked = false);
        } else {
          localStorageValue === el.value
            ? el.classList.add('active')
            : el.classList.remove('active');
        }
      });
  };

  updateCharts = (charts: any, options: EChartsOption) => {
    charts.forEach((chartDom: HTMLElement) => {
      let chart = echarts.getInstanceByDom(chartDom);
      if(chart) chart.setOption(options)
    });
  }

}
