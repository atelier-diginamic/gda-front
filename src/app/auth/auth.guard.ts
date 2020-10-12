import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(private authService: AuthService,
    private router: Router) { } 

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
     if ( this.authService.isAuthenticated() ) {
       return true;
     } else {
       alert('Vous devez être connecté pour accéder à cette page. Redirection vers la page de connexion.' )
      this.router.navigate(['/connexion']);
       return false;
     }
    }
  
}
