import { InputTextModule } from 'primeng/inputtext';
import { LineNotifyComponent } from './line-notify.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectButtonModule } from 'primeng/selectbutton';

import { LineNotifyRoutingModule } from './line-notify-routing.module';
import { FormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';


@NgModule({
  declarations: [LineNotifyComponent],
  imports: [
    LineNotifyRoutingModule,
    CommonModule,
    FormsModule,
    SelectButtonModule,
    InputTextareaModule,
    ButtonModule,
    RippleModule
  ]
})
export class LineNotifyModule { }
