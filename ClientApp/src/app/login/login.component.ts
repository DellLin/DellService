import { GoogleAuthService } from './../api/services/google-auth.service';
import { AuthRedrictService } from './../service/line-login-client.service';
import { LineLoginService } from './../api/services/line-login.service';
import { AuthService } from './../api/services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private lineLoginService: LineLoginService,
    private authService: AuthService,
    private authRedrictService: AuthRedrictService,
    private googleAuthService: GoogleAuthService
  ) {
  }

  ngOnInit(): void {
    this.authService.apiAuthCheckLoginGet$Json().subscribe({
      next: (isLogin) => {if(isLogin) this.router.navigate(['/profile']);}
    })
  }
  onLineSinginCLick() {
    this.authRedrictService.gotoLineLogin();
  }
  onGoogleSinginClick() {
    this.authRedrictService.gotoGoogleLogin();
  }
}
