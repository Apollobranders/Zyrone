import { Routes } from '@angular/router';
import { MapViewComponent } from './map-view/map-view.component';
import { CardViewComponent } from './card-view/card-view.component';
import { AssetsComponent } from './assets.component';
import { AnalyticsComponent } from './asset-detail/analytics/analytics.component';
import { SpecificationsComponent } from './asset-detail/specifications/specifications.component';
import { MaintenanceComponent } from './asset-detail/maintenance/maintenance.component';


export const assets: Routes = [
  {
    path: '',
    redirectTo: 'map-view',
    pathMatch: 'full',
  },
  { path: 'map-view', component: MapViewComponent },
  // { path: 'map-view', component: MapViewComponent },
  { path: 'card-view', component: CardViewComponent },
  { path: 'detail/analytics/:id', component: AnalyticsComponent },
  { path: 'detail/specifications/:id', component: SpecificationsComponent },
  { path: 'detail/maintenance/:id', component: MaintenanceComponent },
];

