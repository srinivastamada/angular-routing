import { NoPageComponent } from './no-page.component';
import { Route } from '@angular/router';

export const NoPageRoutes: Route[] = [
  {
    path: '**',
    component: NoPageComponent
  }
];
