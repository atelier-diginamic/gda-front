import { Component, OnInit } from '@angular/core';
import { SelectBarSynthetique } from 'src/app/entities/SelectBarSynthetique.model';

@Component({
  selector: 'app-page-vues-synthetiques-histogramme',
  templateUrl: './page-vues-synthetiques-histogramme.component.html',
  styleUrls: ['./page-vues-synthetiques-histogramme.component.scss']
})
export class PageVuesSynthetiquesHistogrammeComponent implements OnInit {

  constructor() { }
  selectBarSynthetique = new SelectBarSynthetique();

   title = "Nombre de jours d'absence";
   type = 'ColumnChart';
   data = [
      ["2012", 12],
      ["2013", 12],
      ["2014", 12],
      ["2015", 12],
      ["2016", 12]
   ];

   columnNames = ['Year', 'Asia'];
   options = {};
   width = 550;
   height = 400;
   annee: string;
   
  ngOnInit(): void {
    this.annee = this.selectBarSynthetique.annee;
    
  }

  test() {
    return this.selectBarSynthetique.annee;
  }
}
