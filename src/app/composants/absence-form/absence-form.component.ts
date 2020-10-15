import { Component, OnInit } from '@angular/core';
import { Absence } from 'src/app/entities/absence.model';
import { AbsenceService } from 'src/app/services/absence.service';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';


@Component({
  selector: 'app-absence-form',
  templateUrl: './absence-form.component.html',
  styleUrls: ['./absence-form.component.scss']
})

export class AbsenceFormComponent implements OnInit {
  
  faWindowClose = faWindowClose;
  modeModification: boolean = false;
  //absenceAModifie: Absence = new Absence();
  absenceForm : Absence = new Absence();
  
  constructor(private absenceService : AbsenceService, private router : Router) { }

  ngOnInit(): void {
    this.absenceService.absenceAModifie.subscribe( absenceFromBack => {
      this.modeModification = true;
      this.absenceForm.datePremierJourAbsence = absenceFromBack.datePremierJourAbsence;
      this.absenceForm.dateDernierJourAbsence = absenceFromBack.dateDernierJourAbsence;
      this.absenceForm.typeConge = absenceFromBack.typeConge;
      this.absenceForm.commentaireAbsence = absenceFromBack.commentaireAbsence;
      this.absenceForm.statutDemande = absenceFromBack.statutDemande;
      this.absenceForm.idAbsence = absenceFromBack.idAbsence;
    
    })
  }
 

  creerAbsence() {
    const datePremierJourAbsence: Date = new Date(this.absenceForm.datePremierJourAbsence);
    
    if(this.absenceService.checkDay(datePremierJourAbsence)) {
      // 1, this.absence.datePremierJourAbsence, this.absence.dateDernierJourAbsence, 
      //                                           this.absence.typeConge, this.absence.motif
        this.absenceService.creerAbsence(this.absenceForm)
                                  .subscribe(
                                      data =>  { alert(`Demande de congés enregistrée. ${data}`);
                                      this.router.navigate([`${localStorage.getItem("roleUtilisateur")}/gestionAbsence`]) },
                                      error => console.log(error)
                                  );
    }
  }

  modifierAbsence(){
    const datePremierJourAbsence: Date = new Date(this.absenceForm.datePremierJourAbsence);
    
    if(this.absenceService.checkDay(datePremierJourAbsence)) {
      this.absenceService.modifierAbsence(this.absenceForm)
      .subscribe(
          data =>  { alert(`Demande de congés modifiée. ${data}`);
          this.router.navigate([`${localStorage.getItem("roleUtilisateur")}/gestionAbsence`]) },
          error => console.log(error)
      );
    }
  }
  

  /*retour() {
    this.router.navigate([""]);
  }*/

  checkerDateFormVue() : boolean {
    const datePremierJourAbsence = new Date(this.absenceForm.datePremierJourAbsence);
    
    if(!this.absenceService.checkDay(datePremierJourAbsence)) {
        return false;
    } else {
        return true;
    }
  }

  checkEcartDateFin() : boolean {
    const datePremierJourAbsence = new Date(this.absenceForm.datePremierJourAbsence);
    const dateDernierJourAbsence = new Date(this.absenceForm.dateDernierJourAbsence);
    if(datePremierJourAbsence <= dateDernierJourAbsence) {
      return true;
    } else {
      return false;
    }
  }

  checkStatus() : boolean {
    if(this.absenceForm.typeConge === "CONGE_PAYE") {
      return false;
    } else {
      return true;
    }
  }
}
