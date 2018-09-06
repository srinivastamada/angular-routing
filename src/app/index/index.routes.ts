import { NoPageComponent } from './no-page/no-page.component';
import { ForgotComponent } from './forgot/forgot.component';
import { SignupComponent } from './signup/signup.component';
import { Route } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SystemErrorComponent } from './system-error/system-error.component';
import { IndexComponent } from './index.component';
export const IndexRoutes: Route[] = [
  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: '',
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
