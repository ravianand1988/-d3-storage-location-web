import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  StorageBoardComponent,
  StorageCreateEditComponent,
  StorageD3MapComponent,
  StorageListComponent,
} from './pages';
import { BASE_ROUTE_STORAGE, StorageRoute } from './storage-route.config';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: BASE_ROUTE_STORAGE,
  //   pathMatch: 'full',
  // },
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: StorageRoute.Board,
        pathMatch: 'full',
      },
      {
        path: StorageRoute.Board,
        component: StorageBoardComponent,
      },
      {
        path: StorageRoute.CreateEdit,
        component: StorageCreateEditComponent,
      },
      {
        path: StorageRoute.D3Map,
        component: StorageD3MapComponent,
      },
      {
        path: StorageRoute.List,
        component: StorageListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StorageRoutingModule {}
