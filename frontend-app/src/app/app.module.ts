import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProtectedComponent } from './protected/protected.component';
import { AuthGuard } from './auth/auth.guard';
import { CallbackComponent } from './auth/callback.component';


const routes: Routes = [
  { path: '', component: ProtectedComponent, canActivate: [AuthGuard] },
  { path: 'auth-callback', component: CallbackComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }, // Redirect any unknown route to the homepage
];

@NgModule({
  declarations: [
    AppComponent,
    CallbackComponent,
    ProtectedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
