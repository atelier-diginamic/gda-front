import { Component, OnInit } from '@angular/core';
import { SelectBarSynthetique } from 'src/app/entities/SelectBarSynthetique.model';
import { DepartementVue } from 'src/app/entities/DepartementVue.model';
import { VueDepartementService } from 'src/app/services/vue-departement.service';

@Component({
  selector: 'app-page-vues-departement-collaborateur',
  templateUrl: './page-vues-departement-collaborateur.component.html',
  styleUrls: ['./page-vues-departement-collaborateur.component.scss']
})
export class PageVuesDepartementCollaborateurComponent implements OnInit {

  selectBar = new SelectBarSynthetique();
  departementVueTab: DepartementVue[];
  start = 0;
  joursMaxMois;
  error : boolean = false;
  constructor(private vueService : VueDepartementService) { }


  ngOnInit(): void {
    this.vueService.abonnerObservable().subscribe(tableau => {
      this.departementVueTab = this.getIntervalDate(tableau);
      this.joursMaxMois = tableau[0].joursMaxMois;
     
    }, 
    error => this.error = true);
  }

  afficherListeValidationDemandeAccepte(departement: string, mois: string, annee: string) {
    return this.vueService.calendrierVuueDepartementData(departement, mois, annee)
      
  }

  getForm(selection) {
    this.afficherListeValidationDemandeAccepte("DIGINAMIC", selection.mois, selection.annee).subscribe(
      success => console.log(success),
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
  

