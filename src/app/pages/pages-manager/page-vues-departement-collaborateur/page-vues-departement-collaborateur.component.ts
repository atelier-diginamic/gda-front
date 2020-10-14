import { Component, OnInit } from '@angular/core';
import { AbsenceService } from 'src/app/services/absence.service';
import { Router } from '@angular/router';
import { Absence } from 'src/app/entities/absence.model';

@Component({
  selector: 'app-page-vues-departement-collaborateur',
  templateUrl: './page-vues-departement-collaborateur.component.html',
  styleUrls: ['./page-vues-departement-collaborateur.component.scss']
})
export class PageVuesDepartementCollaborateurComponent implements OnInit {

  constructor(private absenceService : AbsenceService, private router : Router) { }
  erreurTechnique: boolean;
  listeAllAbsences: Absence[];
  listeAllAbsencesValider : Absence[];
  aucuneAbsenceTrouvee: boolean;

  ngOnInit(): void {
    this.afficherListeValidationDemandeAccepte();
  }

  afficherListeValidationDemandeAccepte() {
    this.listeAllAbsences = [];
    this.listeAllAbsencesValider = [];
    this.absenceService.listeAbsenceValider()
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
        this.listeAllAbsencesValider.push(absence);
      }
    },
      error => {
        this.erreurTechnique = true;
        console.log(error);
      });
  }

  
}
  

