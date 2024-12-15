import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private baseUrl = 'http://localhost:3000'; // Adjust the URL if needed

  constructor(private http: HttpClient) {}

  // Login function - stores user and token on successful login
  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, { email, password });
  }

  // Register function - registers a new user
  register(name: string, email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/users`, { name, email, password });
  }

  // Store user info and token in localStorage upon successful login
  storeUserSession(response: any): void {
    localStorage.setItem('user', JSON.stringify(response.user));
    localStorage.setItem('auth_token', 'your-auth-token-here'); // You may use a JWT token here
  }

  // Check if the user is logged in
  isLoggedIn(): boolean {
    return !!localStorage.getItem('auth_token'); // If token exists, user is logged in
  }

  // Get the logged-in user information from localStorage
  getUser(): any {
    return JSON.parse(localStorage.getItem('user') || '{}');
  }

  // Logout functionality - clears the user session
  logout(): void {
    localStorage.removeItem('user');
    localStorage.removeItem('auth_token');
  }
}
