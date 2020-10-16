import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { DepartementVue } from '../entities/DepartementVue.model';

@Injectable({
  providedIn: 'root'
})
export class VueDepartementService {

  constructor(private http: HttpClient) { }

  dataFromBack : Subject<DepartementVue[]> = new Subject<DepartementVue[]>();

  calendrierVuueDepartementData(departement: string, mois: string, annee: string) : Observable<void> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }; 
    
      return this.http.post<DepartementVue[]>(`${environment.baseUrl}${environment.apiVueCalendrierDepartement}`,
      { 
        departement : departement,
        mois: mois,
        annee: annee
      }).pipe(
          map(abs => {
              const tableauEcoute : DepartementVue[] = [];
              const tableau = Object.values(abs);
              tableau.forEach(el => {
                tableauEcoute.push(new DepartementVue(el));
              })

              this.dataFromBack.next(tableauEcoute);
          })
    );
  }
  

  abonnerObservable() {
    return this.dataFromBack.asObservable();
  }
  
}
