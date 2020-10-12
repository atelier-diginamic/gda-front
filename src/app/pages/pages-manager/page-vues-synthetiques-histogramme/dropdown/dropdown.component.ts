import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  valeurDropDown;

  @Input()
  name;

  @Input()
  ngModel
 

  constructor() { }

  ngOnInit(): void {

  }

}
