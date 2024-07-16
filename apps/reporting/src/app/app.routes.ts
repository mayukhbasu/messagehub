// apps/reporting/src/app/app.routes.ts
import { Routes } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

export const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('./reporting/reporting.module').then(m => m.ReportingModule)
  },
  {
    path: 'reporting',
    loadChildren: () => import('./reporting/reporting.module').then(m => m.ReportingModule),
  },
];
