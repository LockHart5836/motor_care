import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from '../services/authentication.service';  // Correct import

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],  // Remove HttpClientModule from here
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements AfterViewInit {
  @ViewChild('username') usernameInput!: ElementRef;
  @ViewChild('password') passwordInput!: ElementRef;
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
    this.errorMessage = '';
    this.isLoading = true;

    const email = this.usernameInput.nativeElement.value;
    const password = this.passwordInput.nativeElement.value;

    // Call the AuthService login method
    this.authService.login(email, password).subscribe(
      (response) => {
        this.isLoading = false;
        console.log('Login successful:', response);

        // Store user session after successful login
        this.authService.storeUserSession(response);

        // Navigate to the dashboard or any other page after login
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        this.isLoading = false;
        console.error('Login failed:', error);
        this.errorMessage = error.error.message || 'An error occurred. Please try again.';
      }
    );
  }

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/dashboard']);  // Redirect to dashboard if logged in
    }
  }
}
