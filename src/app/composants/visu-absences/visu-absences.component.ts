import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Absence } from '../../entities/absence.model';
import { AbsenceService } from '../../services/absence.service';

@Component({
  selector: 'app-visu-absences',
  templateUrl: './visu-absences.component.html',
  styleUrls: ['./visu-absences.component.scss']
})
export class VisuAbsencesComponent implements OnInit {

  constructor(private absenceService: AbsenceService, private router : Router) { }

  aucuneAbsenceTrouvee: boolean;
  erreurTechnique: boolean;
  listeAllAbsences: Absence[];
  listeAbsencesByUser: Absence[] = [];
  nbCPRestants = null;
  nbRTTRestants = null;
  
  ngOnInit(): void {
  }

  // afficherListeAbsence() {
  //   this.absenceService.listerAllAbsences()
  //     .subscribe(listeFromBack => {
  //       this.erreurTechnique = false;
  //       if (listeFromBack.length > 0) {
  //         this.aucuneAbsenceTrouvee = false;
  //         this.listeAllAbsences = listeFromBack;
  //         for (var absence of this.listeAllAbsences) {
  //           console.log(absence);
  //         }
  //       } else {
  //         this.aucuneAbsenceTrouvee = true;
  //       }
  //     },
  //       error => {
  //         this.erreurTechnique = true;
  //         console.log(error);
  //       });
  // }

  afficherListeAbsenceByUser() {
    this.getNbCongePayeRestantsByUser();

    this.getNbRTTRestantsByUser();
    
    this.absenceService.listerAbsencesByUser()
      .subscribe(listeFromBack => {
        this.erreurTechnique = false;
        if (listeFromBack.length > 0) {
          this.aucuneAbsenceTrouvee = false;
          this.listeAllAbsences = listeFromBack;
          for (var absence of this.listeAllAbsences) {
            //console.log(absence);
            this.listeAbsencesByUser.push(absence);
          }
        } else {
          this.aucuneAbsenceTrouvee = true;
        }
      },
        error => {
          this.erreurTechnique = true;
          console.log(error);
        });
  }

  getNbCongePayeRestantsByUser() {
    this.absenceService.getNbCongePayeRestantsByUser()
      .subscribe(soldeCP => {
        this.nbCPRestants = soldeCP;
      },
        error => {
          this.erreurTechnique = true;
          console.log(error);
        })
  }


  getNbRTTRestantsByUser() {
    this.absenceService.getNbRTTRestantsByUser()
      .subscribe(soldeRTT => {
        this.nbRTTRestants = soldeRTT;
      },
        error => {
          this.erreurTechnique = true;
          console.log(error);
        })
  }

  toModificationAbsenceForm( absenceAModifie : Absence ){

    this.absenceService.publierAbsenceAModifie(absenceAModifie);

  }


}

