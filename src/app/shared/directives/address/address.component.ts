import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
    selector: 'app-address-component',
    templateUrl: './address.component.html'
})

export class AddressComponent implements OnInit {
    @Input() parentForm: FormGroup;

    addressFg: FormGroup;
    states: FirebaseListObservable<string[]>;
    countries: FirebaseListObservable<string[]>;
    constructor(db: AngularFireDatabase, private fb: FormBuilder) {
        this.states = db.list('/states');
        this.countries = db.list('/countries');
    }

    ngOnInit() { this.createForm(); }

    createForm() {

        this.addressFg = this.fb.group({
            address1: ['', Validators.required],
            address2: '',
            city: ['', Validators.required],
            state: ['', Validators.required],
            postalCode: ['', Validators.required],
            country: ['', Validators.required],
            // associatedId: ['', Validators.required],
        });
        this.parentForm.addControl('address', this.addressFg);

    }
}