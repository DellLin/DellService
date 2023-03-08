import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LineRoutingModule } from './line-routing.module';
import { LineNotifyComponent } from './line-notify/line-notify.component';


@NgModule({
  imports: [
    CommonModule,
    LineRoutingModule
  ]
})
export class LineModule { }
