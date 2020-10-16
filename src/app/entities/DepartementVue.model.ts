export class DepartementVue {
    public nomCollegue : string;
    public typeCongePremiereLettre : string;
    public datePremierJourAbsence : Date;
    public dateDernierJourAbsence : Date;
    public joursMaxMois : number;
    public tableauJours: number[];

    
    constructor(params: any) {
        Object.assign(this, params);
      }
}