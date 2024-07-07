import { IBaseEntityModel } from ".";

export interface IOperation extends IBaseEntityModel{
    amount:number;
    amount_in_full:string;
    devise:string;
    beneficiery:string;
    groupe:string;
    libelle:string;
    wording:string;
    currentDate:Date;
    types:string;
    observation:string;
    

}