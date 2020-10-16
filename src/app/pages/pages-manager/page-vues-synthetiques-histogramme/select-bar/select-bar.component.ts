import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'protractor';
import { BinomeDataHisto } from 'src/app/entities/binomeDataHisto.model';
import { SelectBarSynthetique } from 'src/app/entities/SelectBarSynthetique.model';
import { TabComptage } from 'src/app/entities/tabComptage.model';
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

  dataFromBack : BinomeDataHisto[] = []// Construction du jeu de donnée pour le graphique envoyée depuis le back


  choisirMoisComptageAbsence(f) : void {
    const absences = [];
    this.histogrammeService.getComptageAbsencesIntervalHistogramme( this.selectBarSynthetique.mois, this.selectBarSynthetique.annee)
                           .subscribe( tabComptages=> { 
                             console.log
                              for ( let i in tabComptages){
                                let newDay = new BinomeDataHisto( tabComptages[i][0] , parseInt(tabComptages[i][1]))
                                console.log( newDay.dateDuJour , newDay.comptageAbsenceDuJour );
                                this.dataFromBack.push( newDay )
                              }
                              this.histogrammeService.publierDataFromBack(this.dataFromBack);
                           },
                           error => console.log("erreur ", error));

  }


}
