import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthInterceptor } from './auth/interceptors/auth.interceptor';
import { JwtInterceptor } from './auth/interceptors/jwt.interceptor';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthInterceptor, { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
