import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return this.http.post<{ access_token: string, token_type: string; }>(`${environment.apiUrl}/login`, { email, password })
      .pipe(
        tap(({ access_token, token_type }) => {
          localStorage.setItem("access_token", access_token)
          localStorage.setItem("token_type", token_type)
        })
      );
  }

  logout() {
    return this.http.post<{}>(`${environment.apiUrl}/logout`, {}).pipe(
      tap(() => {
        localStorage.removeItem("access_token");
      })
    );
  }

  isUserLoggedIn(): boolean {
    if (localStorage.getItem("access_token") != null) {
      return true;
    }
    return false;
  }

  getToken() {
    return localStorage.getItem("access_token");
  }
}
