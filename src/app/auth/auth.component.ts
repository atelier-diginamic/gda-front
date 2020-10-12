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
 
 
  collegue: Collegue = new Collegue({});
  err: boolean;

  constructor(private authSrv: AuthService, private router: Router, private menuService : MenuService) { }

  ngOnInit() {
  }

  connecter() {
    this.authSrv.connecter(this.collegue.email, this.collegue.motDePasse)
      .subscribe(
       
        // en cas de succès, redirection vers la page /d'acceuil
       col => {

          let roleUtilisateur = this.getRoles(col);

          localStorage.setItem("idUtilisateur", col.id.toString());
          localStorage.setItem("roleUtilisateur", roleUtilisateur);
         
          this.router.navigate([`/${roleUtilisateur}/accueil`]);
             
      },
        // en cas d'erreur, affichage d'un message d'erreur
        err => this.err = true
      );
  }

  getRoles(collegue: Collegue) : string {
    return this.menuService.recupererRoleUtilisateur(collegue);
  }

}
