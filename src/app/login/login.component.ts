import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor() {}

  onLogin(): void {
    console.log('Login attempted with email:', this.email, 'and password:', this.password);
  }
}
