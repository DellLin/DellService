import { LineNotifyComponent } from './line-notify/line-notify.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'line-notify', loadChildren: () => import('./line-notify/line-notify.module').then(m => m.LineNotifyModule)},
  { path: 'line-manager', loadChildren: () => import('./line-manager/line-manager.module').then(m => m.LineManagerModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LineRoutingModule { }
