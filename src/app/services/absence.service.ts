import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable,  Subject } from 'rxjs';
import { Absence } from '../entities/absence.model';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AbsenceService {
  idUtilisateur : string;

  constructor(private http : HttpClient) {
    this.idUtilisateur = localStorage.getItem("idUtilisateur");
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
  
}