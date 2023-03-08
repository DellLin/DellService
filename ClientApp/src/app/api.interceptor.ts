import { CookieService } from 'ngx-cookie-service';
import { AuthService } from './api/services/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, filter, Observable, tap, switchMap, take, throwError } from "rxjs";

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor(
    private router: Router,
    private authService: AuthService,
    private cookieService: CookieService
  ) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;
    const token = this.cookieService.get("AccessToken");
    if (token != null) {
      authReq = this.addTokenHeader(req, token);
    }
    return next.handle(authReq)
      .pipe(catchError(error => {
      if (error instanceof HttpErrorResponse && !authReq.url.includes('login') && error.status === 401) {
        console.log("401")
        return this.handle401Error(authReq, next);
      }
      return throwError(error);
    }));
  }
  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);
      const token: any = {
        accessToken: this.cookieService.get("AccessToken"),
        refreshToken: this.cookieService.get("RefreshToken")
      }
      if (token)
        return this.authService.apiAuthRefreshTokenPost$Json().pipe(
          switchMap((token) => {
            if (token) {
              this.isRefreshing = false;
              this.refreshTokenSubject.next(this.cookieService.get("AccessToken"));
              return next.handle(this.addTokenHeader(request, this.cookieService.get("AccessToken")??""));
            }
            else {
              this.router.navigate(['/login']);
              return next.handle(this.addTokenHeader(request, ""));
            }
          }),
          catchError((err) => {
            this.isRefreshing = false;
            this.cookieService.deleteAll();
            this.router.navigate(['/login']);
            return throwError(() => new Error(err));
          })
        );
    }
    return this.refreshTokenSubject.pipe(
      filter(token => token !== null),
      take(1),
      switchMap((token) => next.handle(this.addTokenHeader(request, token)))
    );
  }
  private addTokenHeader(request: HttpRequest<any>, token: string) {
    /* for Spring Boot back-end */
    // return request.clone({ headers: request.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
    /* for Node.js Express back-end */
    return request.clone({
      setHeaders: {
        "Authorization": "Bearer " + token,
      }
    });
  }
}
