import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-address-component',
    templateUrl: './address.component.html'
})

export class AddressComponent implements OnInit {
    addressForm: FormGroup;

    constructor(private fb: FormBuilder) { this.createForm(); }

    ngOnInit() { }

    createForm() {
        this.addressForm = this.fb.group({
            address1: ['', Validators.required],
            address2: '',
            city: ['', Validators.required],
            state: ['', Validators.required],
            postalCode: ['', Validators.required],
            country: ['', Validators.required],
            associatedId: ['', Validators.required],
        });
    }
}