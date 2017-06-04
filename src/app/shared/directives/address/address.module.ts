import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './address.component';
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

@NgModule({
    imports: [ReactiveFormsModule, CommonModule, MdInputModule, MdSelectModule],
    exports: [AddressComponent],
    declarations: [AddressComponent],
    providers: [],
})
export class AddressModule { }
