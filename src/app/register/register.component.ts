import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';  // Make sure to import the service
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  name: string = '';  // Added to capture the user's name

  constructor(private router: Router, private authService: AuthenticationService) {}

  onSubmit(): void {
    // Validate that passwords match
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // Call the register method from AuthenticationService
    this.authService.register(this.name, this.email, this.password).subscribe({
      next: (response) => {
        alert('Registration successful! Please login.');
        this.router.navigate(['/login']);  // Redirect to login after successful registration
      },
      error: (err) => {
        alert('Registration failed! Please try again.');
        console.error('Registration error:', err);
      }
    });
  }
}
