// src/app/core/services/auth.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private accessToken: string | null = null;

  getAccessToken(): string | null {
    // read from memory / storage
    return this.accessToken;
  }

  canRefresh(): boolean {
    // e.g., check presence/validity of refresh token
    return true;
  }

  refreshToken(): Observable<string | null> {
    // call /auth/refresh then update this.accessToken and return it
    // return this.http.post<{accessToken:string}>('/auth/refresh', {}).pipe(
    //   tap(r => this.accessToken = r.accessToken),
    //   map(r => r.accessToken)
    // );
    return of(null); // stub until you implement
  }

  logout(): void {
    this.accessToken = null;
    // clear storages, etc.
  }
}
