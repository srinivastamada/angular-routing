import { Route } from '@angular/router';
import { AuthGuard } from './../guards/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home.component';
import { ProductsComponent } from './products/products.component';
import { SettingsComponent } from './settings/settings.component';
import { UserComponent } from './user/user.component';

export const HomeRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: DashboardComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'user/:username', component: UserComponent },
      { path: 'user/:username/:id', component: UserComponent }
    ]
  }
];
