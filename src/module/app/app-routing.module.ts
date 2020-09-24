import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './component/index/index.component';
import { LoginComponent } from './component/login/login.component';
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/shoutbox',
    pathMatch: 'full'
  },
  {
    path: 'login',
    redirectTo: '/shoutbox',
    pathMatch: 'full'
  },
  {
    path: 'user',
    component: DefaultLayoutComponent,
      loadChildren: () =>
        import('../user/user.module').then(m => m.UserModule)
  },
  {
    path: 'shoutbox',
    component: DefaultLayoutComponent,
      loadChildren: () =>
        import('../shoutbox/shoutbox.module').then(m => m.ShoutboxModule)
  },
  {
    path: 'profile',
    component: DefaultLayoutComponent,
      loadChildren: () =>
        import('../profile/profile.module').then(m => m.ProfileModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
