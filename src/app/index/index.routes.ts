import { AuthGuardService } from './../services/auth-guard.service';
import { ForgotComponent } from './forgot/forgot.component';
import { SignupComponent } from './signup/signup.component';
import { Route } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SystemErrorComponent } from './system-error/system-error.component';
import { IndexComponent } from './index.component';
import { LoginGuardService } from '../services/login-guard.service';
export const IndexRoutes: Route[] = [
  {
    path: '',
    component: IndexComponent,
    canActivate: [LoginGuardService],
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'signup',
        component: SignupComponent
      },
      {
        path: 'forgot',
        component: ForgotComponent
      },
      {
        path: 'system-error',
        component: SystemErrorComponent
      }
    ]
  }
];
