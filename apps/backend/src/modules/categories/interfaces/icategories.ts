import { IBaseEntityModel, ICompany, IProducts, ISubcategorie } from "@uni/contracts";

export interface ICategorie extends IBaseEntityModel{
    designation:string;
    company?:ICompany
    product?:IProducts[]
    subcategorie?:ISubcategorie[]
}