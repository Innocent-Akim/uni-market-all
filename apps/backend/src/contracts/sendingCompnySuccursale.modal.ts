import { IBaseEntityModel, ICompany, IProducts, ISuccursal } from ".";

export interface  ISendingCompnySuccursale extends IBaseEntityModel{
    product?:IProducts;
    company?:ICompany;
    succursale?:ISuccursal;
    

}