import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'storage',
    pathMatch: 'full',
  },
  {
    path: 'storage',
    loadChildren: () =>
      import('./modules/storage/storage.module').then(
        (mod) => mod.StorageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
