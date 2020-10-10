import { Component, OnInit } from '@angular/core';
import { faEye } from '@fortawesome/free-solid-svg-icons';




@Component({
  selector: 'app-vue-synthetique',
  templateUrl: './vue-synthetique.component.html',
  styleUrls: ['./vue-synthetique.component.scss']
})
export class VueSynthetiqueComponent implements OnInit {
  faEye = faEye;
  constructor() { }

  ngOnInit(): void {
  }

}
