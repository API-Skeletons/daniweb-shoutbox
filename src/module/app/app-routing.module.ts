import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './component/index/index.component';
import { LoginComponent } from './component/login/login.component';
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/profile/view',
    pathMatch: 'full'
  },
  {
    path: 'login',
    redirectTo: '/profile/view',
    pathMatch: 'full'
  },
  {
    path: 'user',
    component: DefaultLayoutComponent,
      loadChildren: () =>
        import('../user/user.module').then(m => m.UserModule)
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
