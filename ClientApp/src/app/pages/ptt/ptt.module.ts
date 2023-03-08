import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { PttRoutingModule } from './ptt-routing.module';
import { SearchRuleComponent } from './search-rule/search-rule.component';
import { TableModule } from 'primeng/table';
import { MatchHistoryComponent } from './match-history/match-history.component';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessagesModule } from 'primeng/messages';
import { ConfirmationService } from 'primeng/api';


@NgModule({
  declarations: [
    SearchRuleComponent,
    MatchHistoryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PttRoutingModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    ConfirmDialogModule,
    MessagesModule,
    TableModule
  ],
  providers: [ConfirmationService, DatePipe]
})
export class PttModule { }
