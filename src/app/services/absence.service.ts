import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable,  Subject } from 'rxjs';
import { Absence } from '../entities/absence.model';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { text } from '@fortawesome/fontawesome-svg-core';

const table: string[] = [];


@Injectable({
  providedIn: 'root'
})

export class AbsenceService {

  private listeAbsencesSub: BehaviorSubject<string[]> = new BehaviorSubject(table);

  idUtilisateur : string;
  absenceAModifie : Subject<Absence> = new Subject<Absence>();

  constructor(private http : HttpClient) {
    this.idUtilisateur = localStorage.getItem("idUtilisateur");
   }

   creerAbsence(absence : Absence) : Observable<Object>{
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }; 
    
      return this.http.post(`${environment.baseUrl}${environment.apiCreerAbsence}`,
      { 
        idCollegue: this.idUtilisateur,
        datePremierJourAbsence: absence.datePremierJourAbsence,
        dateDernierJourAbsence: absence.dateDernierJourAbsence,
        typeConge: absence.typeConge,
        commentaireAbsence: absence.commentaireAbsence,
      })
  }


  // Controle si le jour de debut d'absence est à J +2
  checkDay(datePremierJourAbsence: Date) : boolean {
    const dateNow = new Date();
    const datePlusUn = new Date(dateNow.setDate(dateNow.getDate() + 1));
    if(datePlusUn < datePremierJourAbsence) {
      return true;
    } else {
      return false;
    }
  }

  //  listerAllAbsences() : Observable<Absence[]> {
  //   return this.http.get<Absence[]>(`${environment.baseUrl}${environment.apiListeAbsence}`);
  // }

  listerAbsencesByUser() : Observable<Absence[]> {
    
    return this.http.get<Absence[]>(`${environment.baseUrl}${environment.apiVisualisationDesAbsencesByUser}${this.idUtilisateur}`)
  }

  getNbCongePayeRestantsByUser() : Observable<BigInteger> {
    return this.http.get<BigInteger>(`${environment.baseUrl}${environment.apiNbCongePayeRestant}=${this.idUtilisateur}`)
  }

  getNbRTTRestantsByUser() : Observable<BigInteger> {
    return this.http.get<BigInteger>(`${environment.baseUrl}${environment.apiNbRttRestant}=${this.idUtilisateur}`)
  }

  publierAbsenceAModifie( absenceParam : Absence) : void {
    return this.absenceAModifie.next(absenceParam);
  }

  abonnerAbsenceAModifie() {
    return this.absenceAModifie.asObservable();
  }
  
}