import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdButtonModule,
  MdCheckboxModule,
  MdGridListModule,
  MdToolbarModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdCardModule
} from '@angular/material';

export * from './models';

@NgModule({
  imports: [
    MdButtonModule,
    MdCheckboxModule,
    MdGridListModule,
    MdInputModule,
    MdButtonModule,
    MdListModule,
    MdMenuModule,
    MdToolbarModule,
    MdCardModule
  ],
  exports: [
    MdButtonModule,
    MdCheckboxModule,
    MdGridListModule,
    MdInputModule,
    MdButtonModule,
    MdListModule,
    MdMenuModule,
    MdToolbarModule,
    MdCardModule
  ],
  declarations: []
})
export class SharedModule { }
