import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './component/view/view.component';
import { ProfileRoutingModule } from './profile-routing.module';

@NgModule({
  declarations: [ViewComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
