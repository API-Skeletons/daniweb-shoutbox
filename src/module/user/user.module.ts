import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoutComponent } from './component/logout/logout.component';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [
    LogoutComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
