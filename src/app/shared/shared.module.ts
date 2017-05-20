import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule, MdCheckboxModule, MdGridListModule, MdToolbarModule, MdInputModule } from '@angular/material';

@NgModule({
  imports: [MdButtonModule, MdCheckboxModule, MdGridListModule, MdInputModule, MdButtonModule],
  exports: [MdButtonModule, MdCheckboxModule, MdGridListModule, MdInputModule, MdButtonModule],
  declarations: []
})
export class SharedModule { }
