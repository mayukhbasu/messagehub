import { Component } from '@angular/core';
import { ColDef, GridOptions } from 'ag-grid-community';
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
  gridOptions: GridOptions = {
    pagination: true,
    rowSelection: 'multiple',
    // Enable floating filter globally
    defaultColDef: {
      sortable: true,
      filter: true, // Allow filters globally
      floatingFilter: true, // Floating filter for all columns
    },
  };

  columnDefs: ColDef[] = [
    {
      headerName: 'Actions',
      field: 'actions',
      cellRenderer: 'actionRenderer', // Custom renderer for actions
      filter: false, // No filter for actions column
      floatingFilter: false, // No floating filter for actions column
      width: 150, // Adjust width as needed
    },
    {
      headerName: 'Account Number',
      field: 'accountNumber',
      filter: 'agTextColumnFilter', // Enable text filter for this column
      floatingFilter: true, // Enable floating filter
    },
    {
      headerName: 'Account Name',
      field: 'accountName',
      filter: 'agTextColumnFilter',
      floatingFilter: true,
    },
    {
      headerName: 'Account Opened Date',
      field: 'openedDate',
      filter: 'agDateColumnFilter', // Enable date filter for date columns
      floatingFilter: true,
    },
    {
      headerName: 'Account Closed Date',
      field: 'closedDate',
      filter: 'agDateColumnFilter',
      floatingFilter: true,
    },
    {
      headerName: 'Base Currency Code',
      field: 'baseCurrencyCode',
      filter: 'agTextColumnFilter',
      floatingFilter: true,
    },
    {
      headerName: 'MIA Code',
      field: 'miaCode',
      filter: 'agTextColumnFilter',
      floatingFilter: true,
    },
    {
      headerName: 'Fund Code',
      field: 'fundCode',
      filter: 'agTextColumnFilter',
      floatingFilter: true,
    },
    {
      headerName: 'Plan ID',
      field: 'planId',
      filter: 'agTextColumnFilter',
      floatingFilter: true,
    },
  ];

  rowData: Account[] = [
    {
      actions: 'Edit',
      accountNumber: '12345',
      accountName: 'Account One',
      openedDate: '2022-01-01',
      closedDate: '2023-01-01',
      baseCurrencyCode: 'USD',
      miaCode: 'MIA123',
      fundCode: 'FUND01',
      planId: 'PLAN001',
    },
    {
      actions: 'Edit',
      accountNumber: '67890',
      accountName: 'Account Two',
      openedDate: '2023-02-01',
      closedDate: '2023-12-01',
      baseCurrencyCode: 'EUR',
      miaCode: 'MIA456',
      fundCode: 'FUND02',
      planId: 'PLAN002',
    },
    // Add more rows as needed
  ];
}
