import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleComponent } from './people.component';
import { SharedModule } from '../shared/shared.module';
import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleAddComponent } from './people-add/people-add.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    PeopleComponent,
    PeopleListComponent,
    PeopleAddComponent
  ]
})
export class PeopleModule { }

export * from './people.component';
