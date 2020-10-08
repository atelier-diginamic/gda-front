import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { stringify } from 'querystring';
import { Observable } from 'rxjs';
import { Absence } from 'src/app/entities/absence.model';
import { GestionAbsenceService } from 'src/app/services/gestion-absence.service';

@Component({
  selector: 'app-creer-absence',
  templateUrl: './creer-absence.component.html',
  styleUrls: ['./creer-absence.component.scss']
})
export class CreerAbsenceComponent implements OnInit {

  constructor(private gestionAbsenceService: GestionAbsenceService) { }

  ngOnInit(): void {
  }
  absence : Absence = new Absence();

  creerAbsence() {
    const dateDebut: Date = new Date(this.absence.dateDebut)
    
    if(this.gestionAbsenceService.checkDay(dateDebut.getDate())) {
      // 1, this.absence.dateDebut, this.absence.dateFin, 
      //                                           this.absence.typeConge, this.absence.motif
        this.gestionAbsenceService.creerAbsence(this.absence)
                                  .subscribe(
                                      data => console.log("ma data ", JSON.stringify(data)),
                                      error => console.log(error)
                                  );
    }
  }

  checkerDateFormVue() : boolean {
    const dateDebut = new Date(this.absence.dateDebut);
    if(!this.gestionAbsenceService.checkDay(dateDebut.getDate())) {
        return false;
    } else {
        return true;
    }
  }

  checkEcartDateFin() : boolean {
    const dateDebut = new Date(this.absence.dateDebut);
    const dateFin = new Date(this.absence.dateFin);
    if(this.gestionAbsenceService.checkDateFin(dateDebut, dateFin) === 0) {
      return false;
    } else {
      return true;
    }
   
  }
}
