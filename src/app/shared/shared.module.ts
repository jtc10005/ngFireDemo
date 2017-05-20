import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule, MdCheckboxModule, MdGridListModule, MdToolbarModule, MdInputModule, MdListModule } from '@angular/material';

@NgModule({
  imports: [MdButtonModule, MdCheckboxModule, MdGridListModule, MdInputModule, MdButtonModule, MdListModule],
  exports: [MdButtonModule, MdCheckboxModule, MdGridListModule, MdInputModule, MdButtonModule, MdListModule],
  declarations: []
})
export class SharedModule { }
