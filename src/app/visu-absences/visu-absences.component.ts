import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { Absence } from '../entities/absence.model';
import { AbsenceService } from '../services/absence.service';

@Component({
  selector: 'app-visu-absences',
  templateUrl: './visu-absences.component.html',
  styleUrls: ['./visu-absences.component.scss']
})
export class VisuAbsencesComponent implements OnInit {

  constructor(private absenceService : AbsenceService) { }

  aucuneAbsenceTrouvee:boolean;
  erreurTechnique:boolean;
  listeAllAbsences: Absence[];

  ngOnInit(): void {
  }

  afficherListeAbsence(){
    this.absenceService.listerAllAbsences()
      .subscribe( listeFromBack => {
        this.erreurTechnique = false;
        if ( listeFromBack.length > 0 ){
          this.aucuneAbsenceTrouvee = false;
          this.listeAllAbsences = listeFromBack;
          for (var absence of this.listeAllAbsences ){
            console.log(absence);
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
