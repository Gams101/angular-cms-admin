import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  template: `
    <div class="login">
      <div class="header">
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
        </h2>
      </div>
      <login-form (login)="handleLogin($event)"></login-form>
    </div>
  `,
  styles: [`
    .login {
      @apply flex flex-col min-h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8
    }

    .header {
      @apply w-full max-w-md space-y-8
    }
  `]
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    if (this.authService.isUserLoggedIn()) {
      this.router.navigateByUrl("dashboard");
    }
  }

  handleLogin(creds: { email: string, password: string }) {
    this.authService.login(creds.email, creds.password).subscribe(() => this.router.navigateByUrl("/dashboard"));
  }

}
