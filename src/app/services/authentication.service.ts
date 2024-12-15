import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private baseUrl = 'http://localhost:3000';  // Backend URL

  constructor(private http: HttpClient) {}

  // Register user (existing method)
  register(name: string, email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/users`, { name, email, password });
  }

  // Login method to call the backend API
  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, { email, password });
  }

  // Store user session after successful login
  storeUserSession(response: any): void {
    localStorage.setItem('auth_token', response.token);  // Assuming the backend sends a token
    localStorage.setItem('user', JSON.stringify(response.user));  // Optional, store user details
  }

  // Check if the user is logged in by checking token
  isLoggedIn(): boolean {
    return !!localStorage.getItem('auth_token');
  }

  // Get stored user details
  getUser(): any {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  // Logout method to clear session
  logout(): void {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user');
  }
}
