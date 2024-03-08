import { Routes } from '@angular/router';
import { AlertsComponent } from './alerts/alerts.component';
import { EventsComponent } from './events/events.component';

export const notifications: Routes = [
  {
    path: '',
    redirectTo: 'alerts',
    pathMatch: 'full',
  },
  { path: 'alerts', component: AlertsComponent },
  { path: 'events', component: EventsComponent }
];

