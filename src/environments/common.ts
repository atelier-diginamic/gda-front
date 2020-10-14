/**
 * Configuration commune à l'environnement de développement et celui de production.
 *
 */
export const config = {
  apiVersion : 'versions',
  apiActuator: 'actuator',
  apiLogin: 'login',
  apiLogout: 'logout',
  apiAuthMe: 'me',
  apiVisualisationDesAbsencesByUser: 'absence/visualisation/user/',
  apiCreerAbsence: 'absence/create',
  apiModifierAbsence : 'absence/modifier',
  apiHistogramme: 'absence/manager/histogramme',
  apiNbCongePayeRestant : 'collegue/nbCongePayeRestants?idUtilisateur',
  apiNbRttRestant : 'collegue/nbRttRestants?idUtilisateur',
  apiVisualisationJoursFeriesEtRTT : 'absence/joursferies/',
  apiListeEnAttente : 'absence/liste/en-attente'
};
