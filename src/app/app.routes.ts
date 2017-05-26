import { Routes } from '@angular/router';
import { InventoryComponent } from './inventory/inventory.module';
import { PeopleComponent } from './people/people.module';

export const appRoutes: Routes = [
    { path: 'inventory', component: InventoryComponent },
    { path: 'people', component: PeopleComponent }];
