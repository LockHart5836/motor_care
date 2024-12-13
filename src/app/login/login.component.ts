import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  onLogin(): void {
    // Simulated login check (replace with actual backend API logic)
    if (this.username === 'jake@gmail.com' && this.password === '123') {
      console.log('Login successful');
      this.router.navigate(['/dashboard']); // Navigate to the dashboard
    } else {
      this.errorMessage = 'Invalid username or password';
      console.error('Login failed');
    }
  }
}
