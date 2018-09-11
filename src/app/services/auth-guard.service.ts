import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(public authService: AuthService, public router: Router ) { }

  canActivate(): boolean {
    if(!this.authService.isAuthenticated()){
      console.log("Part 1");
      this.router.navigate(['login']);
      return false;
    } 
    return true;
  }

  
}
