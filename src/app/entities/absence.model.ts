export class Absence {

        public idCollegue: number;
        public datePremierJourAbsence: Date;
        public dateDernierJourAbsence: Date;
        public typeConge: string;
        public commentaireAbsence: string;
        public statutDemande: string;
        public jourSemaine: String; 
        public idAbsence: number;
        public nomDemandeur: string;
        public prenomDemandeur: string;
        public toString(){
                return `${this.idCollegue}  ${this.datePremierJourAbsence} ${this.dateDernierJourAbsence} ${this.typeConge} ${this.commentaireAbsence} ${this.statutDemande} `
        }

}