import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { MdSnackBar } from '@angular/material';

import { Person } from '../../shared/shared.module';

@Component({
  selector: 'app-people-add',
  templateUrl: './people-add.component.html',
  styleUrls: ['./people-add.component.css']
})
export class PeopleAddComponent implements OnInit {

  people: FirebaseListObservable<Person[]>;
  peopleForm: FormGroup;

  constructor(db: AngularFireDatabase, private fb: FormBuilder, public snackBar: MdSnackBar) {
    this.people = db.list('/people');
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
    const person = this.peopleForm.value;
    console.log('item', person);
    this.people.push(person);
    this.snackBar.open('Item Saved');
    this.peopleForm.reset();
  }
}

