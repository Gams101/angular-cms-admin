import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap(
        (event) => { },
        (error) => {
          if (error instanceof HttpErrorResponse) {
            switch (error.status) {
              case 401:
              case 403:
                this.authService.logout();
                this.router.navigateByUrl("/login");
                break;
              default:
                break;
            }
          }
        }
      )
    );
  }
}
