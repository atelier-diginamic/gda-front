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
  //moisDuChart : string = '';

   title = "Nombre d'absences par jour" ;
   type = 'ColumnChart';
   data = [];
   tabDataTampon : BinomeDataHisto[];
   

   columnNames = [ 'Nombre de collegues absents' , "Jour du mois"];
   options = {};
   width = 1500;
   height = 700;
   annee: string;
   
  ngOnInit(): void {

    this.annee = this.selectBarSynthetique.annee;

    this.histoService.abonnerDataFromBack()
      .subscribe( tabBinome => { this.tabDataTampon = tabBinome;
                                 // this.moisDuChart = new Date(this.tabDataTampon[0].dateDuJour).toLocaleDateString('default', { month: 'long' })
                                  //console.log("test : " + new Date(this.tabDataTampon[0].dateDuJour).toLocaleDateString('default', { month: 'long' }))
                                 for (let binome of this.tabDataTampon){
                                  this.data.push([binome.dateDuJour.substring(8,10), binome.comptageAbsenceDuJour])
                                  this.afficherHisto = true;
                                 }
                            },
                  error => alert("Erreur durant le comptage")
      )
   
  }

  recupAnneeSelected() {
    return this.selectBarSynthetique.annee;
  }

  exportToExel() {
    this.histoService.getExportToExcel().subscribe();
   }
}
