import { Component, OnInit } from '@angular/core';
import { Absence } from 'src/app/entities/absence.model';
import { GestionAbsenceService } from 'src/app/services/gestion-absence.service';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
@Component({
  selector: 'app-creer-absence',
  templateUrl: './creer-absence.component.html',
  styleUrls: ['./creer-absence.component.scss']
})
export class CreerAbsenceComponent implements OnInit {
  faWindowClose = faWindowClose;
  constructor(private gestionAbsenceService: GestionAbsenceService, private router : Router) { }

  ngOnInit(): void {
  }
  absence : Absence = new Absence();

  creerAbsence() {
    const dateDebut: Date = new Date(this.absence.dateDebut);
    
    if(this.gestionAbsenceService.checkDay(dateDebut.getDate())) {
      // 1, this.absence.dateDebut, this.absence.dateFin, 
      //                                           this.absence.typeConge, this.absence.motif
        this.gestionAbsenceService.creerAbsence(this.absence)
                                  .subscribe(
                                      data => console.log(data),
                                      error => console.log("Erreur 200 Mais erreur parse JSON")
                                  );
    }
  }

  retour() {
    this.router.navigate(["tech"]);
  }

  checkerDateFormVue() : boolean {
    const dateDebut = new Date(this.absence.dateDebut);
    if(!this.gestionAbsenceService.checkDay(dateDebut.getDate())) {
        return false;
    } else {
        return true;
    }
  }


  checkStatus() : boolean {
    if(this.absence.typeConge === "CONGE_PAYE") {
      return false;
    } else {
      return true;
    }
  }
}
