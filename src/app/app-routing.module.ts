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
    path: 'select',
    canActivate: [AuthGuard],
    data: { activeNav: 'select' },
    loadChildren: () => import('./modules/select/select.module').then(m => m.SelectModule)
  },
  {
    path: 'forms',
    canActivate: [AuthGuard],
    data: { activeNav: 'forms' },
    loadChildren: () => import('./modules/forms/forms.module').then(m => m.AppFormsModule)
  },
  {
    path: 'ecart',
    canActivate: [AuthGuard],
    data: { activeNav: 'ecart' },
    loadChildren: () => import('./modules/ecart/ecart.module').then(m => m.EcartModule)
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
