import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
i
  creerAbsence(absence : Absence) : Observable<Object>{
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
      return this.http.post(`${environment.baseUrl}${environment.apiCreerAbsence}`,
      { 
        idUtilisateur: this.idUtilisateur,
        dateDebut: absence.dateDebut,
        dateFin: absence.dateFin,
        typeConge: absence.typeConge,
        motif: absence.motif,
  
      },
      httpOptions);
  }

  checkDay(dateDebut: number) : boolean {
    const dateNow = new Date();
    if((dateNow.getDate() + 1) < dateDebut) {
      return true;
    } else {
      return false;
    }
  }
  
}
