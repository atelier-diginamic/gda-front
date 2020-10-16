import { Component, OnInit } from '@angular/core';
import { AbsenceService } from 'src/app/services/absence.service';
import { SelectBarSynthetique } from 'src/app/entities/SelectBarSynthetique.model';
import { map } from 'rxjs/operators';
import { DepartementVue } from 'src/app/entities/DepartementVue.model';
import { Observable } from 'rxjs';
import { VueDepartementService } from 'src/app/services/vue-departement.service';

@Component({
  selector: 'app-page-vues-departement-collaborateur',
  templateUrl: './page-vues-departement-collaborateur.component.html',
  styleUrls: ['./page-vues-departement-collaborateur.component.scss']
})
export class PageVuesDepartementCollaborateurComponent implements OnInit {

  selectBar = new SelectBarSynthetique();
  departementVueTab: DepartementVue[];
  joursMaxMois;
  constructor(private vueService : VueDepartementService) { }


  ngOnInit(): void {
    this.vueService.abonnerObservable().subscribe(tableau => {
      this.departementVueTab = this.getIntervalDate(tableau);
      this.joursMaxMois = tableau[0].joursMaxMois;
     
    }, 
    error => console.log(error));
  }

  afficherListeValidationDemandeAccepte(departement: string, mois: string, annee: string) {
    return this.vueService.calendrierVuueDepartementData(departement, mois, annee)
      
  }

  getForm(selection) {
    this.afficherListeValidationDemandeAccepte("DIGINAMIC", selection.mois, selection.annee).subscribe(
      succes => console.log(this.departementVueTab),
      err => console.log(err)
    );

  }

  counter(i) : any[] {
    return new Array(i)
  }

  getIntervalDate(departementVue: DepartementVue[]) :  DepartementVue[]{
    for(let i = 0; i < departementVue.length; i++) {
      const tableauEachJours: number[] = [];
      const jourDebut: number = new Date(departementVue[i].datePremierJourAbsence).getDate();
      const jourFin: number = new Date(departementVue[i].dateDernierJourAbsence).getDate();
      for (let i = jourDebut; i <= jourFin; i++) {
        tableauEachJours.push(i);
      }

      departementVue[i].tableauJours = tableauEachJours;
    }
    return departementVue;
  }
}
  

