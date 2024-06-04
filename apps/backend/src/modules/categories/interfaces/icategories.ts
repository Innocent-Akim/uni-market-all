import { IBaseEntityModel, ICompany, IProducts } from "@uni/contracts";

export interface ICategorie extends IBaseEntityModel{
    designation:string;
    company?:ICompany
    product?:IProducts[]
}