import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './component/index/index.component';
import { ShoutboxRoutingModule } from './shoutbox-routing.module';
import { SharedModule } from '@shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    ShoutboxRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ShoutboxModule { }
