import { LineNotifyService } from './../../../api/services/line-notify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-notify',
  templateUrl: './line-notify.component.html',
  styleUrls: ['./line-notify.component.scss']
})
export class LineNotifyComponent implements OnInit {

  lineNotifyState: boolean = false;
  pageloading: boolean = true;
  message: string = "";
  stateOptions: any[];
  constructor(
    private lineNotifyService: LineNotifyService
  ) {
    this.stateOptions = [{ label: 'Off', value: false }, { label: 'On', value: true }];
  }

  ngOnInit(): void {
    this.lineNotifyService.apiLineNotifyGetStateGet$Json().subscribe({
      next: (data) => {
        this.lineNotifyState = data;
        this.pageloading = false;
      }
    })
  }
  onLineNotifyStateChange() {
    if (this.lineNotifyState) {
      this.lineNotifyService.apiLineNotifyLineNotifyAuthGet$Json().subscribe({
        next: (data) => { window.location.href = data }
      })
    }
    else {
      this.lineNotifyService.apiLineNotifyRevokeGet$Json().subscribe();
    }
  }
  onSendMessageClick() {
    this.lineNotifyService.apiLineNotifySendMessagetoSelfPost$Json({ message: this.message }).subscribe({
      next: (data) => {
        if (data){
          this.message = "";
        }
      }
    })
  }

}
