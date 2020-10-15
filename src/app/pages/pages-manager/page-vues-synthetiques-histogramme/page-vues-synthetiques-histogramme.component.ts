import { Component, OnInit } from '@angular/core';
import { Histogramme } from 'src/app/entities/histogramme.model';
import { HistogrammeService } from 'src/app/services/histogramme.service';

@Component({
  selector: 'app-page-vues-synthetiques-histogramme',
  templateUrl: './page-vues-synthetiques-histogramme.component.html',
  styleUrls: ['./page-vues-synthetiques-histogramme.component.scss']
})
export class PageVuesSynthetiquesHistogrammeComponent implements OnInit {

  constructor(private srvhisto: HistogrammeService) { }
  histogramme = new Histogramme();
  title = 'Population (in millions)';
   type = 'ColumnChart';
   data = [
      ["2012", 12, 12],
      ["2013", 12, 12],
      ["2014", 12, 12],
      ["2015", 12, 12],
      ["2016", 12, 12]
   ];

   columnNames = ['Year', 'Asia','Europe'];
   options = {};
   width = 550;
   height = 400;
   annee: string;
   
  ngOnInit(): void {
    this.annee = this.histogramme.annee;
      
  }

  test() {
    return this.histogramme.annee;
  }

  exportToExel() {
    this.srvhisto.getExportToExcel().subscribe();
   }
}
