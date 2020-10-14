import { Component, OnInit } from '@angular/core';
import { Absence } from 'src/app/entities/absence.model';
import { AbsenceService } from '../../services/absence.service';

@Component({
  selector: 'app-visualisationjoursferies',
  templateUrl: './visualisationjoursferies.component.html',
  styleUrls: ['./visualisationjoursferies.component.scss']
})
export class VisualisationjoursferiesComponent implements OnInit {

  constructor(private absService : AbsenceService) { }

  erreurTechnique: boolean;
  aucuneAbsenceTrouvee: boolean;
  listeAllJoursFerie: Absence[];
  listeJoursFerieByAnnee: Absence[] = [];
  
  ngOnInit(): void {
  }

  afficherListeJoursFeries(saisieAnnee : number) {
    this.listeJoursFerieByAnnee = [];

    // this.listeAllJoursFerie = [];
    this.listeJoursFerieByAnnee = [];
    
    this.absService.listerJoursFeriesEtRTT(saisieAnnee)
      .subscribe(listeFromBack => {
        this.erreurTechnique = false;
        if (listeFromBack.length > 0) {
          this.aucuneAbsenceTrouvee = false;
          this.listeAllJoursFerie = listeFromBack;
          for (var absence of this.listeAllJoursFerie) {
            //console.log(absence);
            this.listeJoursFerieByAnnee.push(absence);
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

}
