import { Router } from '@angular/router';
import { AuthService } from './../api/services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";
import { delay } from 'rxjs';
import { LocationStrategy, Location } from '@angular/common';

@Component({
  selector: 'app-topbar',
  templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

  @ViewChild('menubutton') menuButton!: ElementRef;

  @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

  @ViewChild('topbarmenu') menu!: ElementRef;

  constructor(public layoutService: LayoutService,
    private router: Router,
    private cookieService: CookieService,
    private location: Location,
    private locationStrategy: LocationStrategy
    ) {

  }
  onProfileCLick() {
    this.router.navigate(["/main/profile"]);
  }
  onSignOutClick() {
    this.cookieService.delete("AccessToken", "/", window.location.hostname)
    this.cookieService.delete("RefreshToken", "/", window.location.hostname);
    this.router.navigate(["/login"]);
  }
}
