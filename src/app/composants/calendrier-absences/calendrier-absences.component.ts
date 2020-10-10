import { Component, OnInit, ViewChild } from '@angular/core';
import { Calendar, CalendarOptions, DateRangeInput, FullCalendarComponent } from '@fullcalendar/angular';

import { Absence } from 'src/app/entities/absence.model';
import { AbsenceService } from 'src/app/services/absence.service';
import { GestionAbsenceService } from 'src/app/services/gestion-absence.service';



@Component({
  selector: 'app-calendrier-absences',
  templateUrl: './calendrier-absences.component.html',
  styleUrls: ['./calendrier-absences.component.scss']
})
export class CalendrierAbsencesComponent implements OnInit {

  eventsAbsences: Object[] = [];
  absences: Absence[] = [];


  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    locale: 'fr',
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: this.eventsAbsences
  };

  @ViewChild('calendar') calendarComponent: FullCalendarComponent;
 
  
  constructor(private absenceService : AbsenceService) { }
  
  ngOnInit(): void {
    this.absenceService.listerAbsencesByUser().subscribe(
      absences => {
        this.calendarOptions.events =  this.constructEvent(absences);

       },
       error => console.log(error)
      )
  }
  
  handleDateClick(arg) {
    alert('date click! ' + arg);
  }

  nextYear() {
    const calendar = this.calendarComponent.getApi();
    calendar.nextYear();
  }

  lastYear() {
    const calendar = this.calendarComponent.getApi();
    calendar.prevYear();
  }

  constructEvent(tableau: Absence[]) : Object[] {
    const eventsAbsences = []

    for (let i = 0; i < tableau.length; i++) {
      eventsAbsences.push({
        title: `${tableau[i].typeConge}`, start: tableau[i].datePremierJourAbsence, end:  tableau[i].dateDernierJourAbsence, display: 'background'
      })
    }

    return eventsAbsences;
  }
  
  constructVisibleRange(tableau: Absence[]): DateRangeInput[] {
    const eventsAbsences = []

    for (let i = 0; i < tableau.length; i++) {
      eventsAbsences.push({
        start: tableau[i].datePremierJourAbsence, end: tableau[i].dateDernierJourAbsence
      })
    }

    return eventsAbsences;
  }
}
