import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gestion-absence',
  templateUrl: './gestion-absence.component.html',
  styleUrls: ['./gestion-absence.component.scss']
})
export class GestionAbsenceComponent implements OnInit {
  idUtilisateur: string;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => {
      this.idUtilisateur = param.get("idUtilisateur")
    });
  }

}
