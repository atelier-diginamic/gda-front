import { Component, OnInit } from '@angular/core';
import { Absence } from '../entities/absence.model';
import { AbsenceService } from '../services/absence.service';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jour-ferie-form',
  templateUrl: './jour-ferie-form.component.html',
  styleUrls: ['./jour-ferie-form.component.scss']
})
export class JourFerieFormComponent implements OnInit {

  modeModification: boolean = false;
  //absenceAModifie: Absence = new Absence();
  jourFerieForm : Absence = new Absence();
  

  constructor(private absenceService : AbsenceService, private router : Router) { }

  ngOnInit(): void {
    this.absenceService.abonnerJfRttAModifie().subscribe( absenceFromBack => {
      this.modeModification = true;
      this.jourFerieForm.datePremierJourAbsence = absenceFromBack.datePremierJourAbsence;
      this.jourFerieForm.typeConge = absenceFromBack.typeConge;
      this.jourFerieForm.commentaireAbsence = absenceFromBack.commentaireAbsence;
    })
  }

   // Controle si le jour de debut d'absence est au moins demain
   checkJourDansFutur(datePremierJourAbsence: Date) : boolean {
    const dateNow = new Date();
    const datePlusUn = new Date(dateNow.setDate(dateNow.getDate()));
    if(datePlusUn < datePremierJourAbsence) {
      return true;
    } else {
      return false;
    }
  }

  creerJourFerie() {
    const datePremierJourAbsence: Date = new Date(this.jourFerieForm.datePremierJourAbsence);
    
    if(this.checkJourDansFutur(datePremierJourAbsence)) {
     
        this.jourFerieForm.dateDernierJourAbsence = this.jourFerieForm.datePremierJourAbsence; // Seul le jour de débutAbsence est enregistré dans le form
        console.log("test")
        this.absenceService.creerJourFerieRTT(this.jourFerieForm)
                                  .subscribe(
                                      data =>  { alert(`Demande de congés enregistrée. ${data}`);
                                      this.router.navigate([`${localStorage.getItem("roleUtilisateur")}/gestionAbsence`]) },
                                      error => console.log(error)
                                  );
    }
  }

  modifierJourFerie(){
    const datePremierJourAbsence: Date = new Date(this.jourFerieForm.datePremierJourAbsence);
    
    if(this.checkJourDansFutur(datePremierJourAbsence)) {
      this.absenceService.modifierJourFerieRTT(this.jourFerieForm)
      .subscribe(
          data =>  { alert(`Jour Férié / RTT  modifiée. ${data}`);
          /*this.router.navigate([`${localStorage.getItem("roleUtilisateur")}/gestionAbsence`]) */},
          error => console.log(error)
      );
    } else {
      alert("Date saisie déjà passée")
    }
  }
  

  /*retour() {
    this.router.navigate([""]);
  }*/

  checkerDateFormVue() : boolean {
    const datePremierJourAbsence = new Date(this.jourFerieForm.datePremierJourAbsence);
    
    if(!this.checkJourDansFutur(datePremierJourAbsence)) {
        return false;
    } else {
        return true;
    }
  }

  checkEcartDateFin() : boolean {
    const datePremierJourAbsence = new Date(this.jourFerieForm.datePremierJourAbsence);
    const dateDernierJourAbsence = new Date(this.jourFerieForm.dateDernierJourAbsence);
    if(datePremierJourAbsence <= dateDernierJourAbsence) {
      return true;
    } else {
      return false;
    }
  }


}
