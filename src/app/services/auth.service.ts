import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

const TOKEN_KEY = 'auth_token';
const USER_EMAIL_KEY = 'auth_user_email';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly authenticated = signal<boolean>(this.hasToken());
  isAuthenticated = this.authenticated.asReadonly();

  constructor(private router: Router) { }

  private hasToken(): boolean {
    return !!localStorage.getItem(TOKEN_KEY);
  }

  getLoggedUserEmail(): string | null {
    return localStorage.getItem(USER_EMAIL_KEY);
  }

  login(email: string): void {
    const mockToken = 'mock-jwt-token-' + new Date().getTime();
    localStorage.setItem(TOKEN_KEY, mockToken);
    localStorage.setItem(USER_EMAIL_KEY, email);

    this.authenticated.set(true);

    this.router.navigate(['/departamentos']);
  }

  logout(): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_EMAIL_KEY);

    this.authenticated.set(false);

    this.router.navigate(['/login']);
  }
}