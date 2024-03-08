import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideEcharts } from 'ngx-echarts';
import { provideAnimations } from '@angular/platform-browser/animations'
import { provideNativeDateAdapter } from '@angular/material/core';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideEcharts(),
    provideAnimations(),
    importProvidersFrom(CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }))
  ]
};
