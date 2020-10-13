import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { Collegue } from 'src/app/auth/auth.domains';
import { AuthService } from 'src/app/auth/auth.service';
import { MenuService } from 'src/app/services/menu.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

 collegueConnecte: Observable<Collegue>

 idUtilisateur : string  = "";

  links = [
    { title: 'Accueil', fragment: 'accueil' },
    { title: 'Gestion des absences', fragment: 'gestion' },
    { title: 'Planning des absences', fragment: 'planning' },
    { title: 'Validation demandes', fragment: 'validation' },
    { title: 'Vue synthétique', fragment: 'vue' },
    { title: 'Jours feriés', fragment: 'jours' },
  ];

  linksUtilisateur = [
    { title: 'Accueil', fragment: 'accueil' },
    { title: 'Gestion des absences', fragment: `gestion/${this.idUtilisateur}` },
    { title: 'Planning des absences', fragment: 'planning' },
    { title: 'Jours feriés', fragment: 'jours' }
  ]

  faUserCircle = faUserCircle;
  isActive = true;
  onClickProfile() {
  
  }
 
  droitUtilisateur = Number.parseInt(localStorage.getItem("droitUtilisateur"));

  constructor(public route: ActivatedRoute,private router: Router,

    private authSrv : AuthService, private menuService : MenuService ) {
      this.idUtilisateur = localStorage.getItem("idUtilisateur");
      console.log("iddddd ", this.idUtilisateur);
     }


  ngOnInit(): void {
    this.authSrv.verifierAuthentification().subscribe();
    this.collegueConnecte = this.authSrv.collegueConnecteObs;

   /* if((Number.parseInt(localStorage.getItem("droitUtilisateur"))) === 3) {
      this.router.navigate(['/PageManagerComponent'])
      } else if (Number.parseInt(localStorage.getItem("droitUtilisateur")) === 2) 
      { this.router.navigate(['/PageAdministrateurComponent'])
    }  else {this.router.navigate(['/PageUtilisateurComponent'])}*/
 
}

  gererLeDroitUtilisateur(collegue: Collegue): number {
    return this.menuService.recupereLeDroitUtilisateur(collegue);
  }
}
