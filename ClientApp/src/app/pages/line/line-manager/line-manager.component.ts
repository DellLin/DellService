import { MessageLogService } from './../../../api/services/message-log.service';
import { MessageLog } from './../../../api/models/message-log';
import { LineNotifyService } from './../../../api/services/line-notify.service';
import { AccountService } from './../../../api/services/account.service';
import { AccountViewModel } from './../../../api/models/account-view-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-manager',
  templateUrl: './line-manager.component.html',
  styleUrls: ['./line-manager.component.scss']
})
export class LineManagerComponent implements OnInit {
  message: string = "";
  accountList: AccountViewModel[] = [];
  messageLog: MessageLog[] = [];
  columns = [
    { "header": "SendTime", "field": "sendDateTime"},
    { "header": "Message", "field": "message"}
  ];

  constructor(
    private accountService: AccountService,
    private lineNotifyService: LineNotifyService,
    private messageLogService: MessageLogService
  ) { }

  ngOnInit(): void {
    this.accountService.apiAccountAllGet$Json().subscribe({
      next: (data) => {
        this.accountList = data;
      }
    });
    this.loadMessage();
  }
  onSendMessageClick() {
    this.lineNotifyService.apiLineNotifySendMessagetoAllPost$Json({ message: this.message }).subscribe({
      next: (data) => {
        if (data) {
          this.message = "";
        }
      }
    })
    this.loadMessage();
  }
  loadMessage() {
    this.messageLogService.apiMessageLogGet$Json().subscribe({
      next: (data) => {
        this.messageLog = data;
        console.log(data);

      }
    })
  }
}
