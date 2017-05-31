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
  MdCardModule,
  MdSelectModule,
  MdSnackBarModule,
  MdSlideToggleModule
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
    FlexLayoutModule,
    MdSelectModule,
    MdSnackBarModule,
    MdSlideToggleModule
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
    FlexLayoutModule,
    MdSelectModule,
    MdSnackBarModule,
    MdSlideToggleModule
  ],
  declarations: []
})
export class SharedModule { }
