import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Corrected import
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private baseUrl = 'http://localhost:3000'; // Adjust the URL if needed

  constructor(private http: HttpClient) {} // Injecting HttpClient directly

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, { email, password });
  }

  register(name: string, email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/users`, { name, email, password });
  }

  storeUserSession(response: any): void {
    localStorage.setItem('user', JSON.stringify(response.user));
    localStorage.setItem('auth_token', 'your-auth-token-here'); // You may use a JWT token here
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('auth_token'); // If token exists, user is logged in
  }

  getUser(): any {
    return JSON.parse(localStorage.getItem('user') || '{}');
  }

  logout(): void {
    localStorage.removeItem('user');
    localStorage.removeItem('auth_token');
  }
}
