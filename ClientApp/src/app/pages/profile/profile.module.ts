import { RippleModule } from 'primeng/ripple';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageModule } from 'primeng/image';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ImageModule,
    ButtonModule,
    RippleModule,
  ]
})
export class ProfileModule { }
