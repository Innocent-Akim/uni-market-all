import { IBaseEntityModel, IProducts, ISupply } from ".";

export interface ISupplyDetails extends IBaseEntityModel{
    qte:number;
    pu:number;
    product?:IProducts;
    supply?:ISupply
}