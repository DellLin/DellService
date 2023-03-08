import { ButtonModule } from 'primeng/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LineManagerRoutingModule } from './line-manager-routing.module';
import { LineManagerComponent } from './line-manager.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RippleModule } from 'primeng/ripple';
import { DataViewModule } from 'primeng/dataview';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    LineManagerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    LineManagerRoutingModule,
    InputTextareaModule,
    ButtonModule,
    RippleModule,
    DataViewModule,
    InputTextModule,
    TableModule,
  ]
})
export class LineManagerModule { }
