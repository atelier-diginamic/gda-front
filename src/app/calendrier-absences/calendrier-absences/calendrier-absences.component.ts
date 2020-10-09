import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { GestionAbsenceService } from 'src/app/services/gestion-absence.service';

@Component({
  selector: 'app-calendrier-absences',
  templateUrl: './calendrier-absences.component.html',
  styleUrls: ['./calendrier-absences.component.scss']
})
export class CalendrierAbsencesComponent implements OnInit {
  absences : object[] = [];
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: [
      { title: 'event 1', date: '2020-09-10' },
      { title: 'event 2', date: '2019-04-02' }
    ]
  };

 
  
  constructor(private gestionAbsenceService : GestionAbsenceService) { }
  
  ngOnInit(): void {

  }
  
  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr)
  }
}
