import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';


import {TechComponent} from './composants/tech/tech.component';
import {AuthComponent} from './auth/auth.component';
import {StatutConnecteService} from './auth/statut-connecte.service';

/* IMPORTS COLLEGUES */
import { PageAcceuilCollegueComponent } from './pages/pages-collegue/page-acceuil-collegue/page-acceuil-collegue.component';
import { PageGestionAbsenceCollegueComponent } from './pages/pages-collegue/page-gestion-absence-collegue/page-gestion-absence-collegue.component';
import { PageJoursFeriesCollegueComponent } from './pages/pages-collegue/page-jours-feries-collegue/page-jours-feries-collegue.component'
import { PagePlanningAbsenceCollegueComponent } from './pages/pages-collegue/page-planning-absence-collegue/page-planning-absence-collegue.component';


/* IMPORTS MANAGER */
import { PageAcceuilManagerComponent} from './pages/pages-manager/page-acceuil-manager/page-acceuil-manager.component';
import { PageGestionAbsenceManagerComponent } from './pages/pages-manager/page-gestion-absence-manager/page-gestion-absence-manager.component';
import { PageJoursFeriesManagerComponent } from './pages/pages-manager/page-jours-feries-manager/page-jours-feries-manager.component';
import { PageValidationDemandesManagerComponent} from './pages/pages-manager/page-validation-demandes-manager/page-validation-demandes-manager.component';
import { PageVuesSynthetiquesManagerComponent } from './pages/pages-manager/page-vues-synthetiques-manager/page-vues-synthetiques-manager.component';
import { PagePlanningAbsenceManagerComponent} from './pages/pages-manager/page-planning-absence-manager/page-planning-absence-manager.component'

/* IMPORTS MANAGER */
import { PageAcceuilAdministrateurComponent} from './pages/pages-administrateur/page-acceuil-administrateur/page-acceuil-administrateur.component';
import { PageGestionAbsenceAdministrateurComponent} from './pages/pages-administrateur/page-gestion-absence-administrateur/page-gestion-absence-administrateur.component';
import { PagePlanningAbsenceAdministrateurComponent} from './pages/pages-administrateur/page-planning-absence-administrateur/page-planning-absence-administrateur.component';
import { PageJoursFeriesAdministrateurComponent} from './pages/pages-administrateur/page-jours-feries-administrateur/page-jours-feries-administrateur.component';
import { CalendrierAbsencesComponent } from './composants/calendrier-absences/calendrier-absences.component';
import { AbsenceFormComponent } from './composants/absence-form/absence-form.component';
import { PageVuesSynthetiquesHistogrammeComponent } from './pages/pages-manager/page-vues-synthetiques-histogramme/page-vues-synthetiques-histogramme.component';
import { PageVuesDepartementCollaborateurComponent } from './pages/pages-manager/page-vues-departement-collaborateur/page-vues-departement-collaborateur.component';


const routes: Routes =  [
  
  { path: '', redirectTo: '/connexion', pathMatch: 'full'},

  { path: 'tech', component: TechComponent, canActivate: [StatutConnecteService]}, // /tech accessible uniquement si connecté
  { path: 'connexion', component: AuthComponent},
  
  /* ROUTES COLLEGUES */
  { path: 'collegue/accueil',  component:  PageAcceuilCollegueComponent, canActivate: [ StatutConnecteService ] },
  { path: 'collegue/gestionAbsence', component: PageGestionAbsenceCollegueComponent, canActivate: [ StatutConnecteService]},
  { path: 'collegue/planningAbsence', component : PagePlanningAbsenceCollegueComponent, canActivate: [ StatutConnecteService ]},
  { path: 'collegue/joursFeries', component : PageJoursFeriesCollegueComponent, canActivate: [ StatutConnecteService ] },
  
  /* ROUTES MANAGER */
  { path: 'manager/accueil',  component: PageAcceuilManagerComponent, canActivate: [ StatutConnecteService ]},
  { path: 'manager/gestionAbsence', component: PageGestionAbsenceManagerComponent, canActivate: [ StatutConnecteService ]},
  { path: 'manager/planningAbsence', component : CalendrierAbsencesComponent, canActivate: [ StatutConnecteService ]},
  { path: 'manager/validationDemandeAbsence', component : PageValidationDemandesManagerComponent, canActivate: [ StatutConnecteService ]},
  { path: 'manager/vueSynthetique', component : PageVuesSynthetiquesManagerComponent, canActivate: [ StatutConnecteService ]},
  { path: 'manager/vueSynthetique/histogramme', component: PageVuesSynthetiquesHistogrammeComponent, canActivate: [ StatutConnecteService ] },
  { path: 'manager/vueSynthetique/departement-collaborateur', component: PageVuesDepartementCollaborateurComponent, canActivate: [ StatutConnecteService ] },
  { path: 'manager/joursFeries', component: PageJoursFeriesManagerComponent ,canActivate: [ StatutConnecteService ] },


  /* ROUTES ADMIN */

  { path: 'admin/accueil',  component: PageAcceuilAdministrateurComponent, canActivate: [ StatutConnecteService ]},
  { path: 'admin/gestionAbsence', component: PageGestionAbsenceAdministrateurComponent, canActivate: [ StatutConnecteService ]},
  { path: 'admin/planningAbsence', component: PagePlanningAbsenceAdministrateurComponent, canActivate: [ StatutConnecteService ]},
  { path: 'admin/collegue/joursFeries', component : PageJoursFeriesAdministrateurComponent, canActivate: [ StatutConnecteService ] },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

 