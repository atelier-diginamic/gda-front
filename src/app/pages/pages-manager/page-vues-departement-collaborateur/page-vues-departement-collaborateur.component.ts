import { Component, OnInit } from '@angular/core';
import { AbsenceService } from 'src/app/services/absence.service';
import { SelectBarSynthetique } from 'src/app/entities/SelectBarSynthetique.model';
import { map } from 'rxjs/operators';
import { DepartementVue } from 'src/app/entities/DepartementVue.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page-vues-departement-collaborateur',
  templateUrl: './page-vues-departement-collaborateur.component.html',
  styleUrls: ['./page-vues-departement-collaborateur.component.scss']
})
export class PageVuesDepartementCollaborateurComponent implements OnInit {

  selectBar = new SelectBarSynthetique();
  departementVueTab: any[];
  joursMaxMois;
  constructor(private absenceService : AbsenceService) { }


  ngOnInit(): void {
    
  }

  afficherListeValidationDemandeAccepte(departement: string, mois: string, annee: string) {
    return this.absenceService.calendrierVuueDepartementData(departement, mois, annee)
      .pipe(
          map(abs => {
            this.departementVueTab = Object.values(abs);
           this.joursMaxMois = Number(this.departementVueTab[0].joursMaxMois.toString());
            console.log(this.departementVueTab[0].joursMaxMois);
          })
      );
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

}
  

