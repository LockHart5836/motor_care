import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  constructor(private http: HttpClient, private router: Router) {}

  onLogin(): void {
    this.http.post('http://localhost:3000/login', {
      email: this.username,
      password: this.password,
    }).subscribe({
      next: (response: any) => {
        console.log('Login successful:', response);
        this.router.navigate(['/dashboard']); // Navigate to the dashboard on success
      },
      error: (err) => {
        this.errorMessage = 'Invalid username or password';
        console.error('Login failed:', err);
      },
    });
  }
}
