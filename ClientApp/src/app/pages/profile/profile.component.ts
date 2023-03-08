import { AccountViewModel } from './../../api/models/account-view-model';
import { AuthRedrictService } from './../../service/line-login-client.service';
import { LineLoginService } from './../../api/services/line-login.service';
import { AccountService } from './../../api/services/account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  account?: AccountViewModel;
  constructor(
    private accountSerice: AccountService,
    private lineLoginService: LineLoginService,
    private lineLoginClientService: AuthRedrictService
  ) { }

  ngOnInit(): void {
    this.accountSerice.apiAccountGet$Json()
      .subscribe({ next: (data) => { this.account = data } });
  }
  onSyncLineProfileClick() {
    this.lineLoginService.apiLineLoginSyncLineProfileGet$Json().subscribe({
      next: (data) => {
        if (data != null) {
          this.account = data;
        }
        else {
          this.lineLoginClientService.gotoLineLogin();
        }
      }
    })
  }
}
