import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // Import FormsModule
import { AuthenticationService } from '../services/authentication.service';  

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],  // Add FormsModule here
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements AfterViewInit {
  @ViewChild('username') usernameInput!: ElementRef;
  @ViewChild('password') passwordInput!: ElementRef;
  
  email: string = '';  
  password: string = '';  
  errorMessage: string = '';
  isLoading: boolean = false;
  passwordFieldType: string = 'password';

  constructor(private router: Router, private authService: AuthenticationService) {}

  togglePasswordVisibility(): void {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }

  ngAfterViewInit(): void {
    this.usernameInput.nativeElement.focus();
  }

  onLogin(): void {
    this.errorMessage = '';  // Clear any previous error messages
    this.isLoading = true;    // Show loading state

    this.authService.login(this.email, this.password).subscribe(
      (response) => {
        this.isLoading = false;  // Hide loading state
        console.log('Login successful:', response);
        this.authService.storeUserSession(response);  // Store session data

        // Navigate to the dashboard or home page
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        this.isLoading = false;  // Hide loading state
        this.errorMessage = error.error.message || 'An error occurred during login.';
        console.error('Login failed:', error);
      }
    );
  }
}
