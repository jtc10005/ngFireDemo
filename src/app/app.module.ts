import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

// Modules
import { SharedModule } from './shared/shared.module';
import { InventoryModule } from './inventory/inventory.module';
import { PeopleModule } from './people/people.module';

// Components
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
// import { PeopleComponent } from './people/people.component';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// other
import { appRoutes } from './app.routes';
import { environment } from '../environments/environment';
// import { PeopleListComponent } from './people-list/people-list.component';
// import { PeopleAddComponent } from './people-add/people-add.component';


@NgModule({
  declarations: [
    AppComponent,
    // PeopleComponent,
    ToolbarComponent,
    // PeopleListComponent,
    // PeopleAddComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase, 'ngfire'),
    AngularFireDatabaseModule,
    SharedModule,
    RouterModule.forRoot(appRoutes),
    InventoryModule,
    PeopleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


