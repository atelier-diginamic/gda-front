import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable,  Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistogrammeService {

  constructor(private http: HttpClient) { }

  getIntervalHistogramme(departement: string, mois: string, annee: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }; 

    return this.http.post(`${environment.baseUrl}${environment.apiHistogramme}`,
      { 
        departement: departement,
        mois: mois,
        annee: annee
      })

  }

  getExportToExcel() : Observable <Blob> {
    window.open("http://localhost:8080/export/absence", '_blank');
  return this.http.get <Blob>(`${environment.baseUrl}${environment.apiExportAbsence}`)
  }

}
