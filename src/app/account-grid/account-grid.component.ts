import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { ActionRendererComponent } from './action-renderer.component';

export interface Account {
  actions: string; // This will be handled as a button column now
  accountNumber: string;
  accountName: string;
  openedDate: string;
  closedDate: string;
  baseCurrencyCode: string;
  miaCode: string;
  fundCode: string;
  planId: string;
}

@Component({
  selector: 'app-account-grid',
  templateUrl: './account-grid.component.html',
  styleUrls: ['./account-grid.component.css']
})
export class AccountGridComponent {
  columnDefs: ColDef[] = [
    {
      headerName: 'Actions',
      field: 'actions',
      cellRenderer: 'actionRenderer', // Custom renderer for actions
      filter: false,
      width: 150, // Adjust width as needed
    },
    { headerName: 'Account Number', field: 'accountNumber', floatingFilter: true },
    { headerName: 'Account Number Name', field: 'accountName' },
    { headerName: 'Account Opened Date', field: 'openedDate' },
    { headerName: 'Account Closed Date', field: 'closedDate' },
    { headerName: 'Account Base Currency Code', field: 'baseCurrencyCode' },
    { headerName: 'MIA Code', field: 'miaCode' },
    { headerName: 'Fund Code', field: 'fundCode' },
    { headerName: 'Plan Id', field: 'planId' }
  ];

  // Define 100 records
  rowData: Account[] = Array.from({ length: 100 }, (_, index) => ({
    actions: '',
    accountNumber: `ACCT-${index + 1}`,
    accountName: `Account Name ${index + 1}`,
    openedDate: `2020-01-01`,
    closedDate: `2023-12-31`,
    baseCurrencyCode: 'USD',
    miaCode: `MIA-${index + 1}`,
    fundCode: `FUND-${index + 1}`,
    planId: `PLAN-${index + 1}`,
  }));

  frameworkComponents = {
    actionRenderer: ActionRendererComponent 
  };

  // Action renderer for edit and delete icons
  actionRenderer(params: any) {
    return `
      <button class="edit-btn" (click)="editRow(${params.node.rowIndex})">
        <i class="fas fa-edit"></i>
      </button>
      <button class="delete-btn" (click)="deleteRow(${params.node.rowIndex})">
        <i class="fas fa-trash"></i>
      </button>
    `;
  }

  // Edit and delete methods
  editRow(rowIndex: number) {
    alert('Edit Row: ' + rowIndex); // Replace with your edit logic
  }

  deleteRow(rowIndex: number) {
    alert('Delete Row: ' + rowIndex); // Replace with your delete logic
  }

  
}
