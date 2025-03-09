import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RippleModule } from 'primeng/ripple';
import { SelectButtonModule } from 'primeng/selectbutton';
import { LineBotService } from 'src/app/api/services';

@Component({
  selector: 'app-line-bot',
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    SelectButtonModule,
    InputTextareaModule,
    ButtonModule,
    RippleModule],
  templateUrl: './line-bot.component.html',
  styleUrls: ['./line-bot.component.scss']
})
export class LineBotComponent implements OnInit {
  lineBotState: boolean = false;
  pageloading: boolean = true;
  message: string = "";
  stateOptions: any[] = [{ label: 'Off', value: false }, { label: 'On', value: true }];
  lineBotService: LineBotService = inject(LineBotService);
  constructor() { }

  ngOnInit(): void {
    this.lineBotService.apiLineBotGetStateGet$Json().subscribe({
      next: (data) => {
        this.lineBotState = data;
        this.pageloading = false;
      }
    })
  }
  onLineNotifyStateChange() {
    // if (this.lineNotifyState) {
    //   this.lineNotifyService.apiLineNotifyLineNotifyAuthGet$Json().subscribe({
    //     next: (data) => { window.location.href = data }
    //   })
    // }
    // else {
    //   this.lineNotifyService.apiLineNotifyRevokeGet$Json().subscribe();
    // }
  }
  onSendMessageClick() {
    this.lineBotService.apiLineBotSendMessagetoSelfPost$Json({ message: this.message }).subscribe({
      next: (data) => {
        if (data) {
          this.message = "";
        }
      }
    })
  }
}
