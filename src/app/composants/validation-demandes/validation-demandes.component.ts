import { Component, OnInit } from '@angular/core';
import { AbsenceService } from 'src/app/services/absence.service';
import { Router } from '@angular/router';
import { Absence } from '../../entities/absence.model';

@Component({
  selector: 'app-validation-demandes',
  templateUrl: './validation-demandes.component.html',
  styleUrls: ['./validation-demandes.component.scss']
})
export class ValidationDemandesComponent implements OnInit {

  constructor(private absenceService: AbsenceService, private router: Router) { }

  aucuneAbsenceTrouvee: boolean;
  erreurTechnique: boolean;
  listeAllAbsences: Absence[];
  listeAllAbsenceEnAttente : Absence[];

  ngOnInit(): void {
    this.afficherValidationDemandeEnAttente();
  }


  afficherValidationDemandeEnAttente() {
    this.listeAllAbsences = [];
    this.listeAllAbsenceEnAttente = [];
    this.absenceService.listeAbsencesEnAttente()
    .subscribe(listeFromBack => {

      this.erreurTechnique = false;
      if (listeFromBack.length > 0) {
        this.aucuneAbsenceTrouvee = false;
        this.listeAllAbsences = listeFromBack;
      } else {
        this.aucuneAbsenceTrouvee = true;   
      }
      for (var absence of this.listeAllAbsences) {
        //console.log(absence);
        this.listeAllAbsenceEnAttente.push(absence);
      }
    },
      error => {
        this.erreurTechnique = true;
        console.log(error);
      });
  }

  valider(absence: Absence) {

  this.absenceService.validerAbsence(absence)
  .subscribe(absenceFromBack => {
    console.log(absence);
  },
  error => {
    console.log(error);
  })
  }

  refuser(absence : Absence) {
    this.absenceService.refuserAbsence(absence)
    .subscribe(absenceFromBack => {
      console.log(absence)
    },
    error => {
      console.log(error);
    })
  } 
}
