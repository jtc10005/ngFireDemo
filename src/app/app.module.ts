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

// Components
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { PeopleComponent } from './people/people.component';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// other
import { appRoutes } from './app.routes';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    ToolbarComponent,

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
    InventoryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


