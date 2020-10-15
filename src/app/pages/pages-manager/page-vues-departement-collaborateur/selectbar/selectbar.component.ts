import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CalendrierMois } from 'src/app/enum/calendrier-mois.enum';

@Component({
  selector: 'app-selectbar',
  templateUrl: './selectbar.component.html',
  styleUrls: ['./selectbar.component.scss']
})
export class SelectbarComponent implements OnInit {
  @Output() selectionPicked: EventEmitter<any> = new EventEmitter<any>();

  @Input()
  selectBar;

  enumsMois = CalendrierMois;
  departements = [];
  annees= ["2021"];
  constructor() { }
  ngOnInit(): void {
  }

  chooseInterval(f) {
    this.selectionPicked.emit(f);
  }
}
