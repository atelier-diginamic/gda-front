import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { Absence } from 'src/app/entities/absence.model';
import { AbsenceService } from 'src/app/services/absence.service';
import { GestionAbsenceService } from 'src/app/services/gestion-absence.service';

@Component({
  selector: 'app-calendrier-absences',
  templateUrl: './calendrier-absences.component.html',
  styleUrls: ['./calendrier-absences.component.scss']
})
export class CalendrierAbsencesComponent implements OnInit {
  absences : Absence[] = [];
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: [
      { title: 'event 1', date: '2020-09-10' },
      { title: 'event 2', date: '2019-04-02' }
    ]
  };

 
  
  constructor(private absenceService : AbsenceService) { }
  
  ngOnInit(): void {
    this.absenceService.listerAbsencesByUser().subscribe(
      absence => this.absences = absence,
      
    )
  }
  
  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr)
  }

  formateAbsence() {
    const tableauEvents = [{}];
    this.absences.forEach(absence => {
      tableauEvents.push({
        title : absence.typeConge, date: absence.datePremierJourAbsence
      })
    })
    return tableauEvents;
  }
}
