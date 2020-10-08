import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { text } from '@fortawesome/fontawesome-svg-core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Absence } from '../entities/absence.model';

const table: string[] = [];

@Injectable({
  providedIn: 'root'
})
export class GestionAbsenceService implements OnInit {
  private listeAbsencesSub: BehaviorSubject<string[]> = new BehaviorSubject(table);
  private idUtilisateur: string;
  
  constructor(private http : HttpClient) { 
    this.idUtilisateur = localStorage.getItem("idUtilisateur");
      
  }

  ngOnInit() : void {
  }


  get listeAbsencesObs() : Observable<string[]> {
    return this.listeAbsencesSub.asObservable();
  }

  afficherListeAbsence(idUtilisateur: string) : void {
    this.http.get<string[]>(`${environment.baseUrl}${environment.apiListeAbsence}${idUtilisateur}`, {withCredentials: true})
    
  }

  

  creerAbsence(absence : Absence) : Observable<Object>{
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }; 
    
      return this.http.post(`${environment.baseUrl}${environment.apiCreerAbsence}`,
      { 
        idUtilisateur: this.idUtilisateur,
        datePremierJourAbsence: absence.datePremierJourAbsence,
        dateDernierJourAbsence: absence.dateDernierJourAbsence,
        typeConge: absence.typeConge,
        commentaireAbsence: absence.commentaireAbsence,
      })
  }

  // Controle si le jour de debut d'absence est à J +2
  checkDay(dateDebut: number) : boolean {
    const dateNow = new Date();
    if((dateNow.getDate() + 1) < dateDebut) {
      return true;
    } else {
      return false;
    }
  }

  // Controle si la date de fin est supérieure ou égale à la date de début
  checkDateFin(dateDebut: Date, dateFin: Date) {
    return (+dateFin) - (+dateDebut);
  }

  
}
