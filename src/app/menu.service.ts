import { Injectable } from '@angular/core';
import { async } from '@angular/core/testing';
import { stringify } from 'querystring';
import { Observable } from 'rxjs';
import { Collegue } from './auth/auth.domains';

@Injectable({
  providedIn: 'root'
})
export class MenuService {



  constructor() { }

  recupereLeDroitUtilisateur(collegue : Collegue) : number {
    let valuePrecedent: number = 0;
    let valueActuelle = 0;

    collegue.roles.forEach(valeurRole => {
      valueActuelle = +valeurRole;

      if(valueActuelle > valuePrecedent) {
        valuePrecedent = valueActuelle;
      } 
    });
    return valuePrecedent;
  }
}
