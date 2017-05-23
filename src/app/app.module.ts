import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { appRoutes } from './app.routes';
import { PeopleComponent } from './people/people.component';
import { MaterialModule } from '@angular/material';
import { SharedModule } from './shared/shared.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { InventoryModule } from './inventory/inventory.module';





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


