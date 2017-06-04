import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { MdSnackBar } from '@angular/material';

import { Person, address } from '../../shared/shared.module';

@Component({
  selector: 'app-people-add',
  templateUrl: './people-add.component.html',
  styleUrls: ['./people-add.component.css']
})
export class PeopleAddComponent implements OnInit {

  people: FirebaseListObservable<Person[]>;
  addresses: FirebaseListObservable<address[]>;
  peopleForm: FormGroup;

  constructor(db: AngularFireDatabase, private fb: FormBuilder, public snackBar: MdSnackBar) {
    this.people = db.list('/people');
    this.addresses = db.list('/addresses');
    this.createForm();
  }
  ngOnInit() {
  }

  createForm() {
    this.peopleForm = this.fb.group({
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      email: ''
    });

  }

  onSubmit() {

    const address: FormGroup = this.peopleForm.get('address').value;
    this.peopleForm.removeControl('address');
    const person: FormGroup = this.peopleForm.value;
    let newID = this.addPerson(person);

    this.addAddress(newID, address)
    this.snackBar.open('Item Saved');
    this.peopleForm.reset();
  }

  addPerson(person: FormGroup): string {
    const newPerson = this.people.push(person);
    return newPerson.key;
  }
  
  addAddress(key: string, address: FormGroup): string {
    const add = { key: { address } }
    const newAddress = this.addresses.push(add);
    return newAddress.key;
  }
}

