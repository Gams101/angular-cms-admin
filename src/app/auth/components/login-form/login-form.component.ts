import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'login-form',
  template: `
    <form class="login-form" (ngSubmit)="handleSubmit(form)" #form="ngForm">

      <div>
        <label>Email</label>
        <input type="email" name="email" class="input" placeholder="Email" ngModel>
      </div>

      <div>
        <label>Password</label>
        <input type="password" name="password" class="input" placeholder="Password" ngModel>
      </div>

      <button type="submit" class="btn">Login</button>

    </form>
  `,
  styles: [`
    :host {
      @apply mt-8 w-full max-w-md
    }

    .login-form {
      @apply flex flex-col space-y-4
    }
  `]
})
export class LoginFormComponent {

  @Output() create = new EventEmitter<{ email: string, password: string }>();

  handleSubmit(form: NgForm) {

    if (form.valid) {
      this.create.emit(form.value);
    } else {
      form.form.markAllAsTouched();
    }

  }

}
