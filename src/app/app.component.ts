import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Collegue} from './auth/auth.domains';
import {AuthService} from './auth/auth.service';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  collegueConnecte: Observable<Collegue>;

  relationValueRole = new Map([
    [1, "ROLE_UTILISATEUR"],
    [2, "ROLE_ADMINISTRATEUR"],
    [3, "ROLE_MANAGER"]
  ]); 

  constructor(private authSrv: AuthService, private router: Router, private menuService : MenuService) {

  }

  /**
   * Action déconnecter collègue.
   */
  seDeconnecter() {
    this.authSrv.seDeconnecter().subscribe(
      () => this.router.navigate([''])
    );
  }

  /**
   * A l'initialisation, le composant s'abonne au flux du collègue courant connecté.
   *
   * Celui lui permet de rester à jour en fonction des connexions et déconnexions.
   */
  ngOnInit(): void {

    this.collegueConnecte = this.authSrv.collegueConnecteObs;
  }

  getRoles(collegue: Collegue) : string {
    return this.relationValueRole.get(this.menuService.recupereLeDroitUtilisateur(collegue));
  }
}
