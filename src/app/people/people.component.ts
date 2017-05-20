import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms'
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {

  people: FirebaseListObservable<any>;
  form: NgForm;
  customer: Person = new Person();
  constructor(db: AngularFireDatabase) {
    // console.log();

    this.people = db.list('/people');
  }

  updateCustomer(item: NgForm) {
    console.log('form', item);
    this.people.push(item.value);
    item.reset();
  }

  remove(id: any) {
    console.log('id', id);
    this.people.remove(id);
  }

}

class Person {
  firstName: string;
  lastName: string;
  email: string;
  constructor() { }
}