export class Absence {
    constructor( 
        public idCollegue: number,
        public datePremierJourAbsence: Date,
        public dateDernierJourAbsence: Date,
        public typeConge: string,
        public commentaireAbsence: string,
        public statutDemande: string
    ) {}
    
}