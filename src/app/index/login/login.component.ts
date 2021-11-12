import { Router } from "@angular/router";
import { AuthService } from "./../../services/auth.service";
import { Component, OnInit } from "@angular/core";
import * as EmailValidator from 'email-validator';
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  postData = {
    email: "",
    password: "",
  };
  public errorText: string;

  constructor(public authService: AuthService, public router: Router) {
    this.errorText = "";
  }

  ngOnInit() {}

  loginAction() {
    if (EmailValidator.validate(this.postData.email) && this.postData.password) {
      this.authService.login(this.postData).then((res: boolean) => {
        res && this.router.navigate([""]);
      });
    } else {
      this.errorText = "Please give valid data";
    }
  }
}
