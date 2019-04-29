import { Route } from '@angular/router';
import { LoginGuard } from '../guards/login.guard';
import { IndexComponent } from './index.component';
export const IndexRoutes: Route[] = [
  {
    path: '',
    component: IndexComponent,
    canActivate: [LoginGuard],
    children: [
      {
        path: 'login',
        loadChildren: 'app/index/login/login.module#LoginModule'
      },
      {
        path: 'signup',
        loadChildren: 'app/index/signup/signup.module#SignupModule'
      },
      {
        path: 'forgot',
        loadChildren: 'app/index/forgot/forgot.module#ForgotModule'
      },
      {
        path: 'system-error',
        loadChildren:
          'app/index/system-error/system-error.module#SystemErrorModule'
      }
    ]
  }
];
