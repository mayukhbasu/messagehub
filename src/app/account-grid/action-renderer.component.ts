import { Component } from '@angular/core';

@Component({
  selector: 'app-action-renderer',
  template: `
    <button (click)="onEdit()">📝 Edit</button>
    <button (click)="onDelete()">🗑️ Delete</button>
  `,
})
export class ActionRendererComponent {
  params:any;
  // The `params` object contains information about the row data
  agInit(params: any): void {
    this.params = params;
  }

  onEdit() {
    console.log('Edit clicked for row:', this.params.node.data);
  }

  onDelete() {
    console.log('Delete clicked for row:', this.params.node.data);
  }
}
