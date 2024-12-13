import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements AfterViewInit {
  @ViewChild('username') usernameInput!: ElementRef;
  @ViewChild('password') passwordInput!: ElementRef;
  errorMessage: string = '';
  isLoading: boolean = false;

  passwordFieldType: string = 'password';

  constructor(private router: Router) {}

  togglePasswordVisibility(): void {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }

  // Implement AfterViewInit to ensure ViewChild elements are initialized
  ngAfterViewInit(): void {
    this.usernameInput.nativeElement.focus();
  }

  onLogin(): void {
    this.errorMessage = '';  // Clear previous error message
    this.isLoading = true;  // Show loading state
    
    const username = this.usernameInput.nativeElement.value;
    const password = this.passwordInput.nativeElement.value;

    // Simulated login check (replace with actual backend API logic)
    setTimeout(() => {
      // Simulate a short delay for the login process
      this.isLoading = false;  // Hide loading state
      
      if (username === 'jake@gmail.com' && password === '123') {
        console.log('Login successful');
        this.router.navigate(['/dashboard']); // Navigate to the dashboard
      } else {
        this.errorMessage = 'Invalid username or password. Please try again.';
        console.error('Login failed');
      }
    }, 1000); // Simulate delay (replace with actual API call)
  }
}
