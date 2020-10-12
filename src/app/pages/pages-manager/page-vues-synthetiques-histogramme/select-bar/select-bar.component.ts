import { Component, Input, OnInit } from '@angular/core';
import { Histogramme } from 'src/app/entities/histogramme.model';
import { CalendrierMois } from 'src/app/enum/calendrier-mois.enum';
import { HistogrammeService } from 'src/app/services/histogramme.service';

@Component({
  selector: 'app-select-bar',
  templateUrl: './select-bar.component.html',
  styleUrls: ['./select-bar.component.scss']
})
export class SelectBarComponent implements OnInit {

  constructor(private histogrammeService : HistogrammeService) { }
  @Input()
  histogramme

  
  enumsMois = CalendrierMois;
  departements = [];
  annees = [];
  
  ngOnInit(): void {
    this.enumsMois = CalendrierMois;
    this.departements.push("DIGINAMIC", "EPITECH");
    this.annees.push("2020", "2021");
  }


  chooseInterval(f) : void {
    this.histogrammeService.getIntervalHistogramme(this.histogramme.departement, this.histogramme.mois, this.histogramme.annee)
                           .subscribe(absences => {
                             console.log("Les absences histogrammes ", absences);
                           },
                           error => console.log("erreur ", error));

  }


}
