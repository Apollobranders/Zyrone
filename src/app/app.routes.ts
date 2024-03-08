import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent),
      //canActivate: [AuthGuard],
  },
  // {
  //   path: 'assets',
  //   loadComponent: () =>
  //     import('./features/assets/assets.component').then(m => m.AssetsComponent),
  //     //canActivate: [AuthGuard],
  // },
  {
    path: 'assets',
    loadChildren: () => import('./features/assets/assets.routes').then((r => r.assets))
  },
  {
    path: 'services',
    loadChildren: () =>
      import('./features/services/services.routes').then(m => m.services),
      //canActivate: [AuthGuard],
  },
  {
    path: 'invoices',
    loadComponent: () =>
      import('./features/invoices/invoices.component').then(m => m.InvoicesComponent),
      //canActivate: [AuthGuard],
  },
  {
    path: 'users',
    loadComponent: () =>
      import('./features/users/users.component').then(m => m.UsersComponent),
      //canActivate: [AuthGuard],
  },
  // {
  //   path: 'notifications',
  //   loadComponent: () =>
  //     import('./features/notifications/notifications.component').then(m => m.NotificationsComponent),
  //     children: [
  //       { path: '', component: MusclesComponent, pathMatch: 'full' },
  //       { path: 'add', component: MuscleAddComponent },
  //       { path: ':id', component: MuscleEditComponent }
  //     ]
  //     //canActivate: [AuthGuard],
  // },
  {
    path: 'notifications',
    loadChildren: () => import('./features/notifications/notifications.routes').then((r => r.notifications))
  }
];
