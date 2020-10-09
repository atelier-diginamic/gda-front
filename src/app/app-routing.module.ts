import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TechComponent} from './composants/tech/tech.component';
import {StatutConnecteService} from './auth/statut-connecte.service';
import {AuthComponent} from './auth/auth.component';
import { GestionAbsenceComponent } from './composants/gestion-absence/gestion-absence.component';
import { VisuAbsencesComponent } from './visu-absences/visu-absences.component';
import { PageUtilisateurComponent } from './pages/page-utilisateur/page-utilisateur.component';
import { PageAdministrateurComponent } from './pages/page-administrateur/page-administrateur.component';
import { PageManagerComponent } from './pages/page-manager/page-manager.component';

const routes: Routes =  [
  
  { path: 'tech', component: TechComponent, canActivate: [StatutConnecteService]}, // /tech accessible uniquement si connecté
  { path: 'connexion', component: AuthComponent},
  
  { path: 'PageUtilisateurComponent',  component:  PageUtilisateurComponent},
  { path: 'PageUtilisateurComponent/gestion', component: GestionAbsenceComponent},
  
  { path: 'PageManagerComponent',  component: PageManagerComponent},
  { path: 'PageManagerComponent/gestion', component: GestionAbsenceComponent},
 
  { path: 'PageAdministrateur',  component: PageAdministrateurComponent},
  { path: 'PageAdministrateurComponent', component: PageAdministrateurComponent},

  { path: '', redirectTo: '/connexion', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

 