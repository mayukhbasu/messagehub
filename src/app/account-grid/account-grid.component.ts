import { Component } from '@angular/core';
import { ColDef, GridOptions } from 'ag-grid-community';
import { ActionRenderComponent } from '../action-render/action-render.component';

export interface Account {
  actions: string;
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
  // Define your rowData (your data for AG Grid)
  rowData: Account[] = [
    { 
      actions: 'edit', 
      accountNumber: '12345', 
      accountName: 'Sample Account 1', 
      openedDate: '2023-01-01', 
      closedDate: '2024-01-01',
      baseCurrencyCode: 'USD',
      miaCode: 'MIA123',
      fundCode: 'FUND001',
      planId: 'PLAN001',
    },
    { 
      actions: 'edit', 
      accountNumber: '67890', 
      accountName: 'Sample Account 2', 
      openedDate: '2022-02-01', 
      closedDate: '2023-12-01',
      baseCurrencyCode: 'EUR',
      miaCode: 'MIA456',
      fundCode: 'FUND002',
      planId: 'PLAN002',
    },
    // Add more accounts as needed
  ];

  // AG Grid options
  gridOptions: GridOptions = {
    pagination: true,
    rowSelection: 'multiple',
    defaultColDef: {
      sortable: true,
      filter: true, // Allow filters globally
      floatingFilter: true, // Floating filter for all columns
    },
    frameworkComponents: {
      actionRenderer: ActionRenderComponent, // Register the custom component here
    },
  };

  // Column definitions, referencing the custom renderer for actions column
  columnDefs: ColDef[] = [
    {
      headerName: 'Actions',
      field: 'actions',
      cellRendererFramework: 'actionRenderer',
      filter: false, // No filter for actions column
      floatingFilter: false, // No floating filter for actions column
      width: 150, // Adjust width as needed
    },
    { 
      headerName: 'Account Number', 
      field: 'accountNumber', 
      floatingFilter: true 
    },
    { 
      headerName: 'Account Name', 
      field: 'accountName' 
    },
    { 
      headerName: 'Opened Date', 
      field: 'openedDate' 
    },
    { 
      headerName: 'Closed Date', 
      field: 'closedDate' 
    },
    { 
      headerName: 'Base Currency Code', 
      field: 'baseCurrencyCode' 
    },
    { 
      headerName: 'MIA Code', 
      field: 'miaCode' 
    },
    { 
      headerName: 'Fund Code', 
      field: 'fundCode' 
    },
    { 
      headerName: 'Plan ID', 
      field: 'planId' 
    }
  ];
}
