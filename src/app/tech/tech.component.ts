import { Component, OnInit } from '@angular/core';
import {TechService} from './tech.service';
import {BackendLink} from './tech.domains';
import { AuthService } from 'src/app/auth/auth.service';
import { MenuService } from 'src/app/services/menu.service';
import { Observable } from 'rxjs';
import { Collegue } from 'src/app/auth/auth.domains';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';


/**
 * Composant d'affichage d'informations techniques (liens utiles pour connaître l'état du backend).
 *
 * Ce composant permet de valider la communication avec le backend.
 */
@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styles: []
})
export class TechComponent implements OnInit {

  collegue: Collegue = new Collegue({});
  collegueConnecte: Observable<Collegue>
  idUtilisateur : string  = "";
  links: BackendLink[] = [];

  constructor(public route: ActivatedRoute) {
    
    this.idUtilisateur = localStorage.getItem("idUtilisateur");
    console.log("iddddd ", this.idUtilisateur);
  }
  

  ngOnInit() {

  }

}
