import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth-guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    data: { activeNav: 'dashboard' },
    loadChildren: () => import('./pages/dashboard-page/dashboard-page.module').then(m => m.DashboardPageModule)
  },
  {
    path: 'data/grid',
    canActivate: [AuthGuard],
    data: { activeNav: 'data_grid' },
    loadChildren: () => import('./pages/data-grid/data-grid.module').then(m => m.DataGridModule)
  },
  {
    path: 'select',
    canActivate: [AuthGuard],
    data: { activeNav: 'select' },
    loadChildren: () => import('./pages/select/select.module').then(m => m.SelectModule)
  },
  {
    path: 'forms',
    canActivate: [AuthGuard],
    data: { activeNav: 'forms' },
    loadChildren: () => import('./pages/forms/forms.module').then(m => m.AppFormsModule)
  },
  {
    path: 'ecart',
    canActivate: [AuthGuard],
    data: { activeNav: 'ecart' },
    loadChildren: () => import('./pages/ecart/ecart.module').then(m => m.EcartModule)
  },
  {
    path: 'orders',
    canActivate: [AuthGuard],
    data: { activeNav: 'orders' },
    loadChildren: () => import('./pages/order-page/order-page.module').then(m => m.OrderPageModule)
  },
  {
    path: 'profile',
    canActivate: [AuthGuard],
    data: { activeNav: 'profile' },
    loadChildren: () => import('./pages/profile-page/profile-page.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'session/expired',
    loadChildren: () => import('./pages/session-expired/session-expired.module').then(m => m.SessionExpiredModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
