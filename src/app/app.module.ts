import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthComponent} from './auth/auth.component';
import {TechComponent} from './tech/tech.component';
import {RouterModule, Routes} from '@angular/router';
import {StatutConnecteService} from './auth/statut-connecte.service';
import {AuthInterceptorService} from './auth/auth-interceptor.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GestionAbsenceComponent } from './gestion-absence/gestion-absence/gestion-absence.component';
import { GestionAbsenceService } from './services/gestion-absence.service';
import { MenuService } from './services/menu.service';
import { CreerAbsenceComponent } from './forms/creer-absence/creer-absence.component';
import { VisuAbsencesComponent } from './visu-absences/visu-absences.component';
import { PageAdministrateurComponent } from './pages/page-administrateur/page-administrateur.component';
import { PageUtilisateurComponent } from './pages/page-utilisateur/page-utilisateur.component';
import { PageManagerComponent } from './pages/page-manager/page-manager.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    TechComponent,
    NavbarComponent,
    GestionAbsenceComponent,
    CreerAbsenceComponent,
    VisuAbsencesComponent,
    PageAdministrateurComponent,
    PageUtilisateurComponent,
    PageManagerComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }, GestionAbsenceService, MenuService, GestionAbsenceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
