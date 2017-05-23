import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryComponent } from './inventory.component';
import { SharedModule } from '../shared/shared.module';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { InventoryAddComponent } from './inventory-add/inventory-add.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    InventoryComponent,
    InventoryListComponent,
    InventoryAddComponent],
  exports: [InventoryComponent]
})
export class InventoryModule { }
export * from './inventory.component';
