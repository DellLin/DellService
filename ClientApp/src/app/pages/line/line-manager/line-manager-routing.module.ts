import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LineManagerComponent } from './line-manager.component';

const routes: Routes = [{ path: '', component: LineManagerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LineManagerRoutingModule { }
