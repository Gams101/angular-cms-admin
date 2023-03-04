import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-dashboard',
  template: `
    <button class="btn" (click)="logout()">Logout</button>
  `,
  styles: [`

  `]
})
export class DashboardComponent {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  logout(): void {
    this.authService.logout().subscribe(() => {
      this.router.navigateByUrl("/login");
    });
  }

}
