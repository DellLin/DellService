import { GoogleAuthService } from './../api/services/google-auth.service';
import { LineLoginService } from './../api/services/line-login.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthRedrictService {

  constructor(
    private lineLoginService: LineLoginService,
    private googleAuthService: GoogleAuthService
  ) { }
  gotoLineLogin() {
    window.location.href = '/api/LineLogin/LineLogin';
  }
  gotoGoogleLogin() {
    this.googleAuthService.apiGoogleAuthGet$Json().subscribe({
      next: (data) => {
        window.location.href = data;
      }
    });
  }
}
