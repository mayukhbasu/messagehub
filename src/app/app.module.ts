import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountGridComponent } from './account-grid/account-grid.component';
import { AgGridModule } from 'ag-grid-angular';
import { ActionRenderComponent } from './action-render/action-render.component';


@NgModule({
  declarations: [
    AppComponent,
    AccountGridComponent,
    ActionRenderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
