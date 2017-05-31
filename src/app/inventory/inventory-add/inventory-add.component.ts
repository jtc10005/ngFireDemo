import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Inventory } from '../../shared/shared.module';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-inventory-add',
  templateUrl: './inventory-add.component.html',
  styleUrls: ['./inventory-add.component.css']
})
export class InventoryAddComponent implements OnInit {

  newItem = new Inventory({ type: 'shirt', name: 'Old Navy', color: 'red', quantity: 5, cost: 12.99 });
  items: FirebaseListObservable<Inventory[]>;
  colors: FirebaseListObservable<string[]>;
  itemForm: FormGroup; // = new FormGroup({}
  // name: new FormControl('', Validators.required),
  // type: new FormControl(),
  // color: new FormControl(),
  // quantity: new FormControl(),
  // cost: new FormControl(),
  // });


  constructor(db: AngularFireDatabase, private fb: FormBuilder, public snackBar: MdSnackBar) {
    this.items = db.list('/items');
    this.colors = db.list('/colors');
    console.log(this.colors);
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.itemForm = this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      color: '',
      quantity: [1, Validators.required],
      cost: '',
      source: '',
      description: '',
      active: true
    });
  }

  onSubmit() {
    let item = this.itemForm.value;
    console.log('item', item);
    this.items.push(item);
    this.snackBar.open('Item Saved');
    this.itemForm.reset();
  }


}
