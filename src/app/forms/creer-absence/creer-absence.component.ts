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
    const datePremierJourAbsence: Date = new Date(this.absence.datePremierJourAbsence)
    
    if(this.gestionAbsenceService.checkDay(datePremierJourAbsence.getDate())) {
      // 1, this.absence.datePremierJourAbsence, this.absence.dateDernierJourAbsence, 
      //                                           this.absence.typeConge, this.absence.motif
        this.gestionAbsenceService.creerAbsence(this.absence)
                                  .subscribe(
                                      data =>  { alert(`Demande de congés enregistrée. ${data}`);
                                      this.router.navigate(['/tech']) },
                                      error => console.log(error)
                                  );
    }
  }

  retour() {
    this.router.navigate(["tech"]);
  }

  checkerDateFormVue() : boolean {
    const datePremierJourAbsence = new Date(this.absence.datePremierJourAbsence);
    if(!this.gestionAbsenceService.checkDay(datePremierJourAbsence.getDate())) {
        return false;
    } else {
        return true;
    }
  }

  checkEcartDateFin() : boolean {
    const datePremierJourAbsence = new Date(this.absence.datePremierJourAbsence);
    const dateDernierJourAbsence = new Date(this.absence.dateDernierJourAbsence);
    if(datePremierJourAbsence <= dateDernierJourAbsence) {
      return true;
    } else {
      return false;
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
