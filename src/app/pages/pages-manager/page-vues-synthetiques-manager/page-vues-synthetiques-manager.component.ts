import { Component, OnInit } from '@angular/core';
import { faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-page-vues-synthetiques-manager',
  templateUrl: './page-vues-synthetiques-manager.component.html',
  styleUrls: ['./page-vues-synthetiques-manager.component.scss']
})
export class PageVuesSynthetiquesManagerComponent implements OnInit {
  faEye = faEye;
  constructor() { }

  ngOnInit(): void {
  }

}
