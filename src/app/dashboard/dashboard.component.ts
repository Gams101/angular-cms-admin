import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-dashboard',
  template: `
    <button class="logout" (click)="logout()">Logout</button>
  `,
  styles: [`
    .logout {
      margin-top: 20px
    }

    .test {}
  `]
})
export class DashboardComponent {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  logout(): void {
    this.authService.logout();
    this.router.navigateByUrl("/login");
  }
}
