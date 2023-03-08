import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: 'login' },
      { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
      {
        path: 'main', component: AppLayoutComponent, canActivate: [AuthGuard],
        children: [
          { path: '', redirectTo: '#', pathMatch: 'full' },
          { path: 'line', loadChildren: () => import('./pages/line/line.module').then(m => m.LineModule), canActivate: [AuthGuard] },
          { path: 'profile', loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule), canActivate: [AuthGuard] },
          { path: 'ptt', loadChildren: () => import('./pages/ptt/ptt.module').then(m => m.PttModule), canActivate: [AuthGuard] },
        ]
      },
      { path: 'pages/notfound', component: NotfoundComponent },
      // { path: 'profile', loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule) },
      // { path: 'line-manager', loadChildren: () => import('./pages/line/line-manager/line-manager.module').then(m => m.LineManagerModule) },
      // { path: 'ptt', loadChildren: () => import('./pages/ptt/ptt.module').then(m => m.PttModule) },
      { path: '**', redirectTo: '/main' },
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
