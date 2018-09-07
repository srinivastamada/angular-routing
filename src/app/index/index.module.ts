import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { ForgotComponent } from "./forgot/forgot.component";
import { SystemErrorComponent } from "./system-error/system-error.component";
import { NoPageComponent } from "./no-page/no-page.component";

@NgModule({
  imports: [CommonModule],
  declarations: [
    LoginComponent,
    SignupComponent,
    ForgotComponent,
    SystemErrorComponent,
    NoPageComponent
  ]
})
export class IndexModule {}
