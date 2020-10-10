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
 roleUtilisateur : string = localStorage.getItem("roleUtilisateur").toString();

  links = [
    { title: 'Accueil', fragment: `/${this.roleUtilisateur}/accueil` },
    { title: 'Gestion des absences', fragment: `${this.roleUtilisateur}/gestion` },
    { title: 'Planning des absences', fragment: `${this.roleUtilisateur}/planning` },
    { title: 'Validation demandes', fragment: `${this.roleUtilisateur}/validation` },
    { title: 'Vue synthétique', fragment: `${this.roleUtilisateur}/vue` },
    { title: 'Jours feriés', fragment: `${this.roleUtilisateur}/jours` },
  ];

  linksCollegueEtAdmin = [
    { title: 'Accueil', fragment: `/${this.roleUtilisateur}/accueil` },
    { title: 'Gestion des absences', fragment: `${this.roleUtilisateur}/gestionAbsence` },
    { title: 'Planning des absences', fragment: `${this.roleUtilisateur}/planningAbsence` },
    { title: 'Jours feriés', fragment: `${this.roleUtilisateur}/joursFeries` }
  ]

  faUserCircle = faUserCircle;
  isActive = true;
  onClickProfile() {
  
  }
 
  constructor(public route: ActivatedRoute,private router: Router,

    private authSrv : AuthService, private menuService : MenuService ) {
      this.idUtilisateur = localStorage.getItem("idUtilisateur");
      console.log("iddddd ", this.idUtilisateur);
     }


  ngOnInit(): void {
    this.authSrv.verifierAuthentification().subscribe();
    this.collegueConnecte = this.authSrv.collegueConnecteObs;

    console.log("test = " + this.roleUtilisateur);
  }

}
