import { Component } from '@angular/core';
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
      <login-form (create)="handleCreate($event)"></login-form>
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
export class LoginComponent {

  constructor(
    private authService: AuthService,
    private router: Router) { }

  handleCreate(creds: { email: string, password: string }) {
    this.authService.login(creds.email, creds.password).subscribe(() => this.router.navigateByUrl("/dashboard"));
  }

}
