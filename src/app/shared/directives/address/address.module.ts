import { NgModule } from '@angular/core';

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
    imports: [ReactiveFormsModule, MdInputModule],
    exports: [AddressComponent],
    declarations: [AddressComponent],
    providers: [],
})
export class AddressModule { }
