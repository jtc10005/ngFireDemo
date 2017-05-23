import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

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

  itemForm: FormGroup; // = new FormGroup({}
  // name: new FormControl('', Validators.required),
  // type: new FormControl(),
  // color: new FormControl(),
  // quantity: new FormControl(),
  // cost: new FormControl(),
  // });

  constructor(db: AngularFireDatabase, private fb: FormBuilder) {
    this.items = db.list('/items');
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.itemForm = this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      color: '',
      quantity: '',
      cost: '',
    });
  }

  onSubmit() {
    let item = this.itemForm.value;
    console.log('item', item);
    this.items.push(item);
    this.itemForm.reset();
  }

}
