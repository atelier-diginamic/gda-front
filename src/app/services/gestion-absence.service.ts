import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const table: string[] = [];

@Injectable({
  providedIn: 'root'
})
export class GestionAbsenceService implements OnInit {
  private listeAbsencesSub: BehaviorSubject<string[]> = new BehaviorSubject(table);
  private idUtilisateur: string;
  
  constructor(private http : HttpClient) { 
      
  }

  ngOnInit() : void {
   
  }


  get listeAbsencesObs() : Observable<string[]> {
    return this.listeAbsencesSub.asObservable();
  }

  afficherListeAbsence(idUtilisateur: string) : void {
    this.http.get<string[]>(`${environment.baseUrl}${environment.apiListeAbsence}${idUtilisateur}`, {withCredentials: true})
    
  }
}
