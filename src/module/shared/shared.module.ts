import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataModule } from './../data/data.module';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DataModule,
    NgbNavModule
  ],
  exports: [
    DataModule
  ]
})
export class SharedModule { }
