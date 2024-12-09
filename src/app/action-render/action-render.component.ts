import { Component } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-action-render',
  template: `
    <button *ngIf="params.value === 'edit'" class="btn btn-primary" (click)="onEdit()">
      <i class="fa fa-edit"></i> Edit
    </button>
    <button *ngIf="params.value === 'delete'" class="btn btn-danger" (click)="onDelete()">
      <i class="fa fa-trash"></i> Delete
    </button>
    <button *ngIf="params.value === 'view'" class="btn btn-info" (click)="onView()">
      <i class="fa fa-eye"></i> View
    </button>
  `,
  styleUrls: ['./action-render.component.css']
})
export class ActionRenderComponent {
  params: any;

  agInit(params: any): void {
    this.params = params;
  }

  onEdit() {
    alert('Edit clicked for ' + this.params.data.accountNumber);
  }

  onDelete() {
    alert('Delete clicked for ' + this.params.data.accountNumber);
  }

  onView() {
    alert('View clicked for ' + this.params.data.accountNumber);
  }
}