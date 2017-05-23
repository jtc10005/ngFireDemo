import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Inventory } from '../../shared/shared.module';

@Component({
  selector: 'app-inventory-add',
  templateUrl: './inventory-add.component.html',
  styleUrls: ['./inventory-add.component.css']
})
export class InventoryAddComponent implements OnInit {

  newItem = new Inventory({ type: 'shirt', name: 'Old Navy', color: 'red', quantity: 5, cost: 12.99 });
  items: FirebaseListObservable<Inventory[]>;
  constructor(db: AngularFireDatabase) {
    // console.log();
    this.items = db.list('/items');
  }

  ngOnInit() {
  }

  onSubmit(item: HTMLInputElement) {
    console.log('item', item);
    // this.items.push(item.value);
    this.items.push(this.newItem);
    item.value = '';
    console.log(this.items);
  }

}
