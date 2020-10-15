import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectBarSynthetique } from 'src/app/entities/SelectBarSynthetique.model';
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
  annees = ["2020", "2021"];

  constructor() { 

  }

  ngOnInit(): void {
  }

  chooseInterval(f) {
    const selection = new SelectBarSynthetique();
    selection.annee = f.value.annees;
    selection.mois = f.value.enumsMois
    selection.departement = "DIGINAMIC";
    
    return this.selectionPicked.emit(selection);
  }
}
