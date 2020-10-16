import { Component, OnInit } from '@angular/core';
import { HistogrammeService } from 'src/app/services/histogramme.service';
import { SelectBarSynthetique } from 'src/app/entities/SelectBarSynthetique.model';
import { BinomeDataHisto } from 'src/app/entities/binomeDataHisto.model';

@Component({
  selector: 'app-page-vues-synthetiques-histogramme',
  templateUrl: './page-vues-synthetiques-histogramme.component.html',
  styleUrls: ['./page-vues-synthetiques-histogramme.component.scss']
})
export class PageVuesSynthetiquesHistogrammeComponent implements OnInit {


  constructor(private histoService: HistogrammeService) { }

  afficherHisto = false;
  selectBarSynthetique = new SelectBarSynthetique();

   title = "Nombre de jours d'absence";

   type = 'ColumnChart';
   
   data = [];

   tabDataTampon : BinomeDataHisto[];
   

   columnNames = ['Year', 'Asia'];
   options = {};
   width = 2050;
   height = 600;
   annee: string;
   
  ngOnInit(): void {

    this.annee = this.selectBarSynthetique.annee;

    this.histoService.abonnerDataFromBack()
      .subscribe( tabBinome => { this.tabDataTampon = tabBinome; 
                                 for (let binome of this.tabDataTampon){
                                  this.data.push([binome.dateDuJour,binome.comptageAbsenceDuJour])
                                  this.afficherHisto = true;
                                 }
                                },
                  error => alert("Erreur durant le comptage") 
      )
   
  }

  test() {
    return this.selectBarSynthetique.annee;
  }

  exportToExel() {
    this.histoService.getExportToExcel().subscribe();
   }
}
