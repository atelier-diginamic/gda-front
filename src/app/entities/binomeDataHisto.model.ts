export class BinomeDataHisto {

    public dateDuJour : string;
    public comptageAbsenceDuJour : number;

    constructor ( dateEnString: string, nbAbsenceDuJour : number){
        this.dateDuJour = dateEnString;
        this.comptageAbsenceDuJour = nbAbsenceDuJour;
    }

   
}