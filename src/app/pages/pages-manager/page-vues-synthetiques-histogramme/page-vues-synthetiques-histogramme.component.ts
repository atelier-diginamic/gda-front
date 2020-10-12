import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-vues-synthetiques-histogramme',
  templateUrl: './page-vues-synthetiques-histogramme.component.html',
  styleUrls: ['./page-vues-synthetiques-histogramme.component.scss']
})
export class PageVuesSynthetiquesHistogrammeComponent implements OnInit {

  constructor() { }
  
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

   
  ngOnInit(): void {
  }

}
