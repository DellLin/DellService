import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LineRoutingModule } from './line-routing.module';
import { LineNotifyComponent } from './line-notify/line-notify.component';
import { LineBotComponent } from './line-bot/line-bot.component';


@NgModule({
  imports: [
    CommonModule,
    LineRoutingModule
  ],
  declarations: [
  ]
})
export class LineModule { }
