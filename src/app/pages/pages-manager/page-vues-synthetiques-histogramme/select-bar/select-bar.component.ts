import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'protractor';
import { SelectBarSynthetique } from 'src/app/entities/SelectBarSynthetique.model';
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
  selectBarSynthetique

  
  enumsMois = CalendrierMois;
  departements = [];
  annees = [];
  
  ngOnInit(): void {
    this.enumsMois = CalendrierMois;
    this.departements.push("DIGINAMIC", "EPITECH");
    this.annees.push("2020", "2021");
  }


  chooseInterval(f) : void {
    const absences = [];
    this.histogrammeService.getIntervalHistogramme(this.selectBarSynthetique.departement, this.selectBarSynthetique.mois, this.selectBarSynthetique.annee)
                           .subscribe(absences => {
                             
                         
                             console.log("Les absences histogrammes ", absences);
                           },
                           error => console.log("erreur ", error));

  }


}
