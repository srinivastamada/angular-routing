import { AuthGuard } from './../guards/auth.guard';
import { ProductsComponent } from './products/products.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Route } from '@angular/router';
import { HomeComponent } from './home.component';
import { SettingsComponent } from './settings/settings.component';

export const HomeRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: DashboardComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'products', component: ProductsComponent}
    ]
  }
];
