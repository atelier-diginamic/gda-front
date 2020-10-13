import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable,  Subject } from 'rxjs';
import { Absence } from '../entities/absence.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AbsenceService {

  constructor(private http : HttpClient) { }

  listerAllAbsences() : Observable<Absence[]> {
    return this.http.get<Absence[]>(`${environment.baseUrl}${environment.apiListeAbsence}`);
  }
}
