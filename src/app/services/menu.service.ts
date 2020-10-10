import { Injectable } from '@angular/core';
import { async } from '@angular/core/testing';
import { stringify } from 'querystring';
import { Observable } from 'rxjs';
import { Collegue } from '../auth/auth.domains';


@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  recupereLeDroitUtilisateur(collegue : Collegue) : string {
    let valuePrecedent: number = 0;
    let valueActuelle = 0;
    let roleFinal;

    collegue.roles.forEach(valeurRole => {
      valueActuelle = +valeurRole;

      if(valueActuelle > valuePrecedent) {
        valuePrecedent = valueActuelle;
      }
    
    
      
    switch ( valuePrecedent ){
      case 3 :
          roleFinal = "manager";
        break;
      
      case 2 :
        roleFinal = "admin";
        break;

      case 1 :
        roleFinal = "collegue";
        break;
    }
      
    });

    //localStorage.setItem("roleUtilisateur", roleFinal);
    return roleFinal;
  }
}
