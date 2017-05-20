import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'working';

  items: FirebaseListObservable<any>;
  constructor(db: AngularFireDatabase) {
    // console.log();
    this.items = db.list('/items');
  }

  onSubmit(item: HTMLInputElement) {
    console.log('item', item);
    this.items.push(item.value);
    item.value = '';
    console.log(this.items);
  }

  remove(id: any) {
    console.log('id', id);
    this.items.remove(id);
  }

}
