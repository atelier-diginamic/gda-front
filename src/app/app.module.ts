/* Import UTILITAIRES */ 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {StatutConnecteService} from './auth/statut-connecte.service';
import {AuthInterceptorService} from './auth/auth-interceptor.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';


/* Import COMPOSANTS */
import {AuthComponent} from './auth/auth.component';
import {TechComponent} from './composants/tech/tech.component';
import { NavbarComponent } from './composants/navbar/navbar.component';
import { CreerAbsenceComponent } from './composants/forms/creer-absence/creer-absence.component';
import { VisuAbsencesComponent } from './visu-absences/visu-absences.component';
import { GestionAbsenceComponent } from './composants/gestion-absence/gestion-absence.component';
import { GestionAbsenceService } from './services/gestion-absence.service';
import { MenuService } from './services/menu.service';



/* Import PAGES */

// Collegue
import { PageAcceuilCollegueComponent } from './pages/pages-collegue/page-acceuil-collegue/page-acceuil-collegue.component'
import { PageGestionAbsenceCollegueComponent } from './pages/pages-collegue/page-gestion-absence-collegue/page-gestion-absence-collegue.component';
import { PageJoursFeriesCollegueComponent } from './pages/pages-collegue/page-jours-feries-collegue/page-jours-feries-collegue.component'
import { PagePlanningAbsenceCollegueComponent } from './pages/pages-collegue/page-planning-absence-collegue/page-planning-absence-collegue.component';

// Manager
import { PageAcceuilManagerComponent } from './pages/pages-manager/page-acceuil-manager/page-acceuil-manager.component';
import { PageValidationDemandesManagerComponent } from './pages/pages-manager/page-validation-demandes-manager/page-validation-demandes-manager.component';
import { PageGestionAbsenceManagerComponent } from './pages/pages-manager/page-gestion-absence-manager/page-gestion-absence-manager.component';
import { PageVuesSynthetiquesManagerComponent } from './pages/pages-manager/page-vues-synthetiques-manager/page-vues-synthetiques-manager.component';
import { PageJoursFeriesManagerComponent } from './pages/pages-manager/page-jours-feries-manager/page-jours-feries-manager.component';
import { PagePlanningAbsenceManagerComponent } from './pages/pages-manager/page-planning-absence-manager/page-planning-absence-manager.component';

// Administrateur
import { PageAcceuilAdministrateurComponent } from './pages/pages-administrateur/page-acceuil-administrateur/page-acceuil-administrateur.component';
import { PageGestionAbsenceAdministrateurComponent } from './pages/pages-administrateur/page-gestion-absence-administrateur/page-gestion-absence-administrateur.component';
import { PageJoursFeriesAdministrateurComponent } from './pages/pages-administrateur/page-jours-feries-administrateur/page-jours-feries-administrateur.component';
import { PagePlanningAbsenceAdministrateurComponent } from './pages/pages-administrateur/page-planning-absence-administrateur/page-planning-absence-administrateur.component';


// --------- CALENDRIER ANGULAR OFFICIEL -------------- \\
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { CalendrierAbsencesComponent } from './composants/calendrier-absences/calendrier-absences.component';
// --------- !CALENDRIER ANGULAR OFFICIEL! -------------- \\

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    TechComponent,
    NavbarComponent,
    GestionAbsenceComponent,
    CreerAbsenceComponent,
    VisuAbsencesComponent,
    CalendrierAbsencesComponent,
    CreerAbsenceComponent,
    /* Pages COLLEGUE */
    PageAcceuilCollegueComponent,
    PageGestionAbsenceCollegueComponent,
    PageJoursFeriesCollegueComponent,
    PagePlanningAbsenceCollegueComponent,

    /* Pages COLLEGUE */
    PageAcceuilManagerComponent,
    PageValidationDemandesManagerComponent,
    PageGestionAbsenceManagerComponent,
    PageVuesSynthetiquesManagerComponent,
    PageJoursFeriesManagerComponent,
    PagePlanningAbsenceManagerComponent,

    /* Pages COLLEGUE */
    PageAcceuilAdministrateurComponent,
    PageGestionAbsenceAdministrateurComponent,
    PageJoursFeriesAdministrateurComponent,
    PagePlanningAbsenceAdministrateurComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    RouterModule,
    CommonModule,
    FullCalendarModule

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }, GestionAbsenceService, MenuService, GestionAbsenceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
