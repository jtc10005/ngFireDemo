import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Person } from '../../shared/shared.module';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  people: FirebaseListObservable<Person[]>;

  constructor(db: AngularFireDatabase) {
    this.people = db.list('/people');
  }

  ngOnInit() {
  }

  remove(id: any) {
    console.log('id', id);
    this.people.remove(id);
  }

}
