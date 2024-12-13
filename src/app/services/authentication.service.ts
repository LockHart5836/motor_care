import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private apiUrl = 'http://localhost:3000/api/auth';  // URL of your backend API

  constructor(private http: HttpClient) { }

  // Register User
  register(name: string, email: string, password: string): Observable<any> {
    const registerData = { name, email, password };
    return this.http.post(`${this.apiUrl}/register`, registerData);
  }

  // Login User
  login(email: string, password: string): Observable<any> {
    const loginData = { email, password };
    return this.http.post(`${this.apiUrl}/login`, loginData);
  }

  // Store JWT token (if using JWT for authentication)
  setToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  // Get stored JWT token (if using JWT for authentication)
  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  // Remove JWT token (if using JWT for authentication)
  logout(): void {
    localStorage.removeItem('authToken');
  }
}
