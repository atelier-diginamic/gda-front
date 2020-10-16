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
  jfRttAModifie : Subject<Absence> = new Subject<Absence>();
  jfRttASupprimer : Subject<Absence> = new Subject<Absence>();


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

  creerJourFerieRTT( absence : Absence ){
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }; 
    
      return this.http.post(`${environment.baseUrl}${environment.apiCreerJourFerieRTT}`,
      { 
        idCollegue: this.idUtilisateur,
        datePremierJourAbsence: absence.datePremierJourAbsence,
        dateDernierJourAbsence: absence.dateDernierJourAbsence,
        typeConge: absence.typeConge,
        commentaireAbsence: absence.commentaireAbsence,
      })
  }

  modifierAbsence( absence : Absence ) : Observable<Object> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }; 
    
      return this.http.put(`${environment.baseUrl}${environment.apiModifierAbsence}`,
      { 
        idCollegue: this.idUtilisateur,
        idAbsence : absence.idAbsence,
        datePremierJourAbsence: absence.datePremierJourAbsence,
        dateDernierJourAbsence: absence.dateDernierJourAbsence,
        typeConge: absence.typeConge,
        commentaireAbsence: absence.commentaireAbsence,
        statutDemande : absence.statutDemande,
      })
  }

  
  modifierJourFerieRTT( jfRttAModifie : Absence ) : Observable<Object> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }; 
    
      return this.http.put(`${environment.baseUrl}${environment.apiModifierJourFerieRTT}`,
      { 
        datePremierJourAbsence: jfRttAModifie.datePremierJourAbsence,
        typeConge: jfRttAModifie.typeConge,
        commentaireAbsence: jfRttAModifie.commentaireAbsence,
      })
  }

  supprimerJourFerieRTT ( jfRttASuppprimer : Absence ):  Observable<Object> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }; 
      console.log("coucou 2.0");
      return this.http.put(`${environment.baseUrl}${environment.apiSupprimerJourFerieRTT}`,
      { 
        datePremierJourAbsence: jfRttASuppprimer.datePremierJourAbsence,
        typeConge: jfRttASuppprimer.typeConge,
        commentaireAbsence: jfRttASuppprimer.commentaireAbsence,
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

  listeAbsencesEnAttente() : Observable<Absence[]> {
    return this.http.get<Absence[]>(`${environment.baseUrl}${environment.apiListeEnAttente}`)
  }

  listeAbsenceValider() : Observable<Absence[]> {
    return this.http.get<Absence[]>(`${environment.baseUrl}${environment.apiListeAbsenceValider}`)
  }

  listerAbsencesByUser() : Observable<Absence[]> {
    
    return this.http.get<Absence[]>(`${environment.baseUrl}${environment.apiVisualisationDesAbsencesByUser}${this.idUtilisateur}`)
  }

  getNbCongePayeRestantsByUser() : Observable<BigInteger> {
    return this.http.get<BigInteger>(`${environment.baseUrl}${environment.apiNbCongePayeRestant}=${this.idUtilisateur}`)
  }

  getNbRTTRestantsByUser() : Observable<BigInteger> {
    return this.http.get<BigInteger>(`${environment.baseUrl}${environment.apiNbRttRestant}=${this.idUtilisateur}`)
  }


  listerJoursFeriesEtRTT(saisieAnnee : number) : Observable<Absence[]> {
        return this.http.get<Absence[]>(`${environment.baseUrl}${environment.apiVisualisationJoursFeriesRTT}${saisieAnnee}`)
  }

  publierAbsenceAModifie( absenceParam : Absence) : void {
    return this.absenceAModifie.next(absenceParam);
  }




  abonnerAbsenceAModifie() {
    return this.absenceAModifie.asObservable();
  }

  publierJfRttAModifie ( absenceParam : Absence ) : void {
    return this.jfRttAModifie.next(absenceParam);
  }

  publierJfRttASupprimer  ( jfRttParam : Absence ) : void {
    return this.jfRttAModifie.next(jfRttParam);
  }

  abonnerJfRttASupprimer (){
    return this.jfRttASupprimer.asObservable();
  }

  abonnerJfRttAModifie() {
    return this.jfRttAModifie.asObservable();
  }
  
  validerAbsence(absence : Absence) : Observable<Object> {
    const httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  }; 
  
    return this.http.put(`${environment.baseUrl}${environment.apiValiderAbsence}`,
    { 
      idAbsence : absence.idAbsence,
      datePremierJourAbsence: absence.datePremierJourAbsence,
      dateDernierJourAbsence: absence.dateDernierJourAbsence,
      typeConge: absence.typeConge,
      commentaireAbsence: absence.commentaireAbsence
    })
}

  refuserAbsence(absence : Absence): Observable<Object> {
    const httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  }; 
  
    return this.http.put(`${environment.baseUrl}${environment.apiRefuserAbsence}`,
    { 
      idAbsence : absence.idAbsence,
      datePremierJourAbsence: absence.datePremierJourAbsence,
      dateDernierJourAbsence: absence.dateDernierJourAbsence,
      typeConge: absence.typeConge,
      commentaireAbsence: absence.commentaireAbsence,
    })
}


}