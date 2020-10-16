import { Component, OnInit } from '@angular/core';
import { AbsenceService } from 'src/app/services/absence.service';
import { SelectBarSynthetique } from 'src/app/entities/SelectBarSynthetique.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-page-vues-departement-collaborateur',
  templateUrl: './page-vues-departement-collaborateur.component.html',
  styleUrls: ['./page-vues-departement-collaborateur.component.scss']
})
export class PageVuesDepartementCollaborateurComponent implements OnInit {

  selectBar = new SelectBarSynthetique();
  departementVueTab: Object;
  joursMaxMois;
  index = 1;
  constructor(private absenceService : AbsenceService) { }


  ngOnInit(): void {
    this.afficherListeValidationDemandeAccepte("DIGINAMIC", this.selectBar.mois, this.selectBar.annee).subscribe(
      success => console.log(success),
      err => console.log(err)
    );
  }

  afficherListeValidationDemandeAccepte(departement: string, mois: string, annee: string) {
    return this.absenceService.calendrierVuueDepartementData(departement, mois, annee)
      .pipe(
          map(abs => {
            this.departementVueTab = Object.values(abs);
            this.joursMaxMois = Number(this.departementVueTab[0].joursMaxMois.toString());
          })
      );
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

}
  

