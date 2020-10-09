import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TechComponent } from './tech/tech.component';
import { StatutConnecteService } from './auth/statut-connecte.service';
import { AuthComponent } from './auth/auth.component';
import { GestionAbsenceComponent } from './gestion-absence/gestion-absence/gestion-absence.component';
import { PageUtilisateurComponent } from './pages/page-utilisateur/page-utilisateur.component';
import { PageAdministrateurComponent } from './pages/page-administrateur/page-administrateur.component';
import { PageManagerComponent } from './pages/page-manager/page-manager.component';

const routes: Routes = [
  { path: 'tech', component: TechComponent, canActivate: [StatutConnecteService] }, // /tech accessible uniquement si connecté
  { path: 'connexion', component: AuthComponent },
  { path: 'PageUtilisateurComponent/gestion', component: GestionAbsenceComponent },
  { path: 'PageAdministrateurComponent/gestion', component: GestionAbsenceComponent },
  { path: 'PageManagerComponent/gestion', component: GestionAbsenceComponent },
  { path: 'PageUtilisateurComponent', component: PageUtilisateurComponent },
  { path: 'PageManagerComponent', component: PageManagerComponent },
  { path: 'PageAdministrateurComponent', component: PageAdministrateurComponent },
  { path: '', redirectTo: '/connexion', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
