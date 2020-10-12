import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth/auth.service';


@Injectable({
    providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {

  authServ : AuthService;

    constructor(authentification: AuthService) {
      this.authServ = authentification;
    }
  
    canActivate() {
      return this.authServ.isLoggedIn();
    }
  }
