import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Collegue} from './auth/auth.domains';
import {AuthService} from './auth/auth.service';
import { MenuService } from './services/menu.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  collegueConnecte: Observable<Collegue>;
  isConnected : Observable<Collegue>;
  roleUtilisateur: string;
  
  
  constructor(private authSrv: AuthService, private router: Router, private menuService : MenuService) {
    this.roleUtilisateur = localStorage.getItem("roleUtilisateur");
    this.isConnected = authSrv.verifierAuthentification();
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
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void {
    this.collegueConnecte = this.authSrv.collegueConnecteObs;
    }
  
  getRoles(collegue: Collegue) : string {
    return this.menuService.recupererRoleUtilisateur(collegue);
  }

  getId(): string {
    return localStorage.getItem("idUtilisateur");
  }

}
