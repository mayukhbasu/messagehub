import { Routes } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: NxWelcomeComponent,
  },
  {
    path: 'reporting',
    loadChildren: () => import('reporting/Module').then((m) => m.ReportingModule),
  },
  { path: '**', redirectTo: '' },
];
