import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./admin-hub/admin-hub.module').then((m) => m.AdminHubModule),
  },
  { path: '**', redirectTo: '' },
];
