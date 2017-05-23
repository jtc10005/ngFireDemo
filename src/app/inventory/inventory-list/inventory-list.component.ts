import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Inventory } from '../../shared/shared.module';
@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})
export class InventoryListComponent implements OnInit {

  items: FirebaseListObservable<Inventory[]>;
  constructor(db: AngularFireDatabase) {
    // console.log();
    this.items = db.list('/items');
  }
  ngOnInit() {
  }

  remove(id: any) {
    console.log('id', id);
    this.items.remove(id);
  }
}
