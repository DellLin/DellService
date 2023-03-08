
import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { HttpErrorResponse } from '@angular/common/http';
import { map, Observable, ObservableInput, throwError } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from "./api/services";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private cookieService: CookieService,
    private authService: AuthService,
    private router: Router
  ) {
  }

  canActivate() {
    //get the jwt token which are present in the Cookies
    const token = this.cookieService.get("AccessToken");
    console.log(token);

    //Check if the token is expired or not and if token is expired then redirect to login page and return false
    if (token === null || token === undefined) {
      this.router.navigateByUrl("/");
      console.log("false");
      return false;
    }

    return this.authService.apiAuthCheckLoginGet$Json().pipe(map(isLogin => {
      if (!isLogin) {
        this.router.navigateByUrl("/");
      }
      // console.log(isLogin);
      return isLogin;
    }));
  }

  handleError(error: HttpErrorResponse): ObservableInput<boolean> {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
      this.router.navigateByUrl("/");

    }
    // Return an observable with a user-facing error message.
    const err = new Error('Something bad happened; please try again later.'); throwError(() => err);
    return new Observable();
  }
}
