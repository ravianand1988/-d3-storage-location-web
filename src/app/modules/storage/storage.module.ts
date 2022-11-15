import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  StorageBoardComponent,
  StorageCreateEditComponent,
  StorageD3MapComponent,
  StorageListComponent,
} from './pages';
import { StorageRoutingModule } from './storage-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    StorageBoardComponent,
    StorageCreateEditComponent,
    StorageListComponent,
    StorageD3MapComponent,
  ],
  imports: [CommonModule, SharedModule, StorageRoutingModule, AgGridModule],
})
export class StorageModule {}
