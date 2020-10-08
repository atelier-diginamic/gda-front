import { Component, OnInit } from '@angular/core';
import {Collegue} from './auth.domains';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';
import { MenuService } from '../services/menu.service';
import { iif, of } from 'rxjs';
import { isBuffer } from 'util';

/**
 * Formulaire d'authentification.
 */
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styles: []
})
export class AuthComponent implements OnInit {
 
  relationValueRole = new Map([
    [1, "ROLE_UTILISATEUR"],
    [2, "ROLE_ADMINISTRATEUR"],
    [3, "ROLE_MANAGER"]
  ]); 
  collegue: Collegue = new Collegue({});
  err: boolean;

  constructor(private authSrv: AuthService, private router: Router, private menuService : MenuService) { }

  ngOnInit() {
  }

  connecter() {
    this.authSrv.connecter(this.collegue.email, this.collegue.motDePasse)
      .subscribe(
       
        // en cas de succès, redirection vers la page /tech
       col => {
          localStorage.setItem("idUtilisateur", col.id.toString());
          localStorage.setItem("roleUtilisateur", this.getRoles(col));
         
         if(this.gererLeDroitUtilisateur(col) === 3) {
            this.router.navigate(['/PageManagerComponent'])
            } else if (this.gererLeDroitUtilisateur(col) === 2) 
            { this.router.navigate(['/PageAdministrateurComponent'])
          }  else {this.router.navigate(['/PageUtilisateurComponent'])}
       
      },
        // en cas d'erreur, affichage d'un message d'erreur
        err => this.err = true
      );
  }

  getRoles(collegue: Collegue) : string {
    return this.relationValueRole.get(this.menuService.recupereLeDroitUtilisateur(collegue));
  }

  gererLeDroitUtilisateur(collegue: Collegue): number {
    return this.menuService.recupereLeDroitUtilisateur(collegue);
  }
}
