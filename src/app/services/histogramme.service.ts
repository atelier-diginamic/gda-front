import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable,  Subject } from 'rxjs';
import { CalendrierMois } from 'src/app/enum/calendrier-mois.enum';
import { TabComptage } from 'src/app/entities/tabComptage.model';
import { BinomeDataHisto } from '../entities/binomeDataHisto.model';

@Injectable({
  providedIn: 'root'
})
export class HistogrammeService {

  dataFromBack : Subject<BinomeDataHisto[]> = new Subject<BinomeDataHisto[]>();

  constructor(private http: HttpClient) { }

  getComptageAbsencesIntervalHistogramme ( mois: string, annee: string) : Observable <BinomeDataHisto[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }; 

    let myMapping = [];
    let i = 1; // Commence à 1 car premier mois de l'année = 1
    for ( let mois in CalendrierMois){
      myMapping[i] = mois;
      i++;
    }

    let moisRequete = myMapping.indexOf(mois); // Retourne le numéro du mois
    return this.http.get<BinomeDataHisto[]>(`${environment.baseUrl}${environment.apiHistogramme}?mois=${moisRequete}&annee=${annee}`);
  }

  getExportToExcel() : Observable <Blob> {
    window.open("http://localhost:8080/export/absence", '_blank');
    return this.http.get <Blob>(`${environment.baseUrl}${environment.apiExportAbsence}`);
  }

  abonnerDataFromBack(){
    return this.dataFromBack.asObservable();
  }

  publierDataFromBack(tabFromBack : BinomeDataHisto[]){
    return this.dataFromBack.next(tabFromBack);
  }

}
