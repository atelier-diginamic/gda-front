import { Component, OnInit } from '@angular/core';
import {Collegue} from './auth.domains';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';
import { MenuService } from '../services/menu.service';

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
          this.router.navigate(['/tech'])
      },

        // en cas d'erreur, affichage d'un message d'erreur
        err => this.err = true
      );
  }

  getRoles(collegue: Collegue) : string {
    return this.relationValueRole.get(this.menuService.recupereLeDroitUtilisateur(collegue));
  }
}
