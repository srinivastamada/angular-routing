import { Route } from '@angular/router';
import { AuthGuard } from './../guards/auth.guard';
import { HomeComponent } from './home.component';

export const HomeRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../home/dashboard/dashboard.module').then(
            m => m.DashboardModule
          )
      },
      {
        path: 'settings',

        loadChildren: () =>
          import('../home/settings/settings.module').then(m => m.SettingsModule)
      },
      {
        path: 'products',

        loadChildren: () =>
          import('../home/products/products.module').then(m => m.ProductsModule)
      },
      {
        path: 'user/:username',
        loadChildren: () =>
          import('../home/user/user.module').then(m => m.UserModule)
      },
      {
        path: 'user/:username/:id',
        loadChildren: () =>
          import('../home/user/user.module').then(m => m.UserModule)
      }
    ]
  }
];
