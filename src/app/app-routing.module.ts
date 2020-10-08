import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TechComponent} from './tech/tech.component';
import {StatutConnecteService} from './auth/statut-connecte.service';
import {AuthComponent} from './auth/auth.component';
import { GestionAbsenceComponent } from './gestion-absence/gestion-absence/gestion-absence.component';
import { VisuAbsencesComponent } from './visu-absences/visu-absences.component';


const routes: Routes =  [
  { path: 'tech', component: TechComponent, canActivate: [StatutConnecteService]}, // /tech accessible uniquement si connecté
  { path: 'connexion', component: AuthComponent},
  { path: 'tech/gestion', component: GestionAbsenceComponent},
  { path: 'liste', component: VisuAbsencesComponent },
  { path: '', redirectTo: '/connexion', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
