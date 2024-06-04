import { IBaseCompanyEntity } from ".";

export interface ICar extends IBaseCompanyEntity{
    designation:string;
    plaque:string;
    id_chassie:string;
    color:string;
}