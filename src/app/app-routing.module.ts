import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth-guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    data: { activeNav: 'dashboard' },
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'data/grid',
    canActivate: [AuthGuard],
    data: { activeNav: 'data_grid' },
    loadChildren: () => import('./modules/data-grid/data-grid.module').then(m => m.DataGridModule)
  },
  {
    path: 'session/expired',
    loadChildren: () => import('./modules/session-expired/session-expired.module').then(m => m.SessionExpiredModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
