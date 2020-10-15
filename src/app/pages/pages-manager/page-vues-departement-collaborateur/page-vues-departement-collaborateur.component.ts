import { Component, OnInit } from '@angular/core';
import { AbsenceService } from 'src/app/services/absence.service';
import { Router } from '@angular/router';
import { Absence } from 'src/app/entities/absence.model';
import { SelectBarSynthetique } from 'src/app/entities/SelectBarSynthetique.model';

@Component({
  selector: 'app-page-vues-departement-collaborateur',
  templateUrl: './page-vues-departement-collaborateur.component.html',
  styleUrls: ['./page-vues-departement-collaborateur.component.scss']
})
export class PageVuesDepartementCollaborateurComponent implements OnInit {
  dataCalendrier = [];
  selectBar = new SelectBarSynthetique();
  constructor(private absenceService : AbsenceService, private router : Router) { }


  ngOnInit(): void {
   // this.afficherListeValidationDemandeAccepte();
  }

  afficherListeValidationDemandeAccepte(departement: string, mois: string, annee: string) {
    this.dataCalendrier = [];

    this.absenceService.calendrierVuueDepartementData(departement, mois, annee)
      .subscribe(absences => console.log(absences), error => console.log(error));
  }

  getForm(formulaire) {
    console.log(formulaire)
  }
}
  

