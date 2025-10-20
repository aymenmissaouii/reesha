// src/app/core/interceptors/auth.interceptor.ts
import { inject } from '@angular/core';
import {
  HttpInterceptorFn,
  HttpRequest,
  HttpHandlerFn,
  HttpErrorResponse,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, Observable, switchMap, throwError } from 'rxjs';

// ⬇️ Your own auth service (implement the methods used below)
import { AuthService } from '../services/auth';

/**
 * Add Authorization header if we have an access token.
 * - Skip adding the header if request has { headers: { 'X-Skip-Auth': 'true' } }
 * - On 401: try (optionally) to refresh once, otherwise logout and redirect to /login
 */
export const authInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<any> => {
  const auth = inject(AuthService);
  const router = inject(Router);

  // Allow opting out per-request (ex: login, public endpoints, health checks…)
  if (req.headers.has('X-Skip-Auth')) {
    const cleanReq = req.clone({ headers: req.headers.delete('X-Skip-Auth') });
    return next(cleanReq);
  }

  // Some endpoints you might want to skip by path:
  const skipList = ['/auth/login', '/auth/refresh'];
  if (skipList.some((p) => req.url.includes(p))) {
    return next(req);
  }

  // Attach token if available
  const token = auth.getAccessToken(); // string | null
  const authReq = token
    ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } })
    : req;

  return next(authReq).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status !== 401) {
        return throwError(() => error);
      }

      // 401 → try refresh token ONCE, then retry the original request
      // If you don't implement refresh, just logout and redirect.
      if (!auth.canRefresh()) {
        auth.logout();
        router.navigate(['/login'], {
          queryParams: { redirect: router.url || '/' },
        });
        return throwError(() => error);
      }

      // Prevent multiple parallel refreshes: your AuthService should queue/serialize internally.
      return auth.refreshToken().pipe(
        switchMap((newToken) => {
          if (!newToken) {
            auth.logout();
            router.navigate(['/login'], {
              queryParams: { redirect: router.url || '/' },
            });
            return throwError(() => error);
          }
          // Retry original request with new token
          const retryReq = req.clone({
            setHeaders: { Authorization: `Bearer ${newToken}` },
          });
          return next(retryReq);
        }),
        catchError((refreshErr) => {
          auth.logout();
          router.navigate(['/login'], {
            queryParams: { redirect: router.url || '/' },
          });
          return throwError(() => refreshErr);
        })
      );
    })
  );
};
