// apps/reporting/src/app/reporting/reporting.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReportingComponent } from './reporting.component';

const routes: Routes = [
  {
    path: '',
    component: ReportingComponent,
  },
];

@NgModule({
  declarations: [ReportingComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ReportingModule {}
