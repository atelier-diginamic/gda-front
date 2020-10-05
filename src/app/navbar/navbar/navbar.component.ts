import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  links = [
    { title: 'Home', fragment: 'accueil' },
    { title: 'Connexion', fragment: 'connection' },
  ];

  faUserCircle = faUserCircle;
  isActive = true;
  onClickProfile() {
  
  }
 

  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
