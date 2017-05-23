import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
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

import { FlexLayoutModule } from '@angular/flex-layout';

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
    MdCardModule,
    ReactiveFormsModule,
    FlexLayoutModule
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
    MdCardModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  declarations: []
})
export class SharedModule { }
