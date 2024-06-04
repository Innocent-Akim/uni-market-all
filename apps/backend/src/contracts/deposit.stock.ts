import { IBaseEntityModel } from "./base-entity.model";
import { IDeposit } from "./deposit.model";
import { IProducts } from "./products.model";

export interface IDepositSocks extends IBaseEntityModel{
    qte:number;
    qteAlerte:number;
    deposit?:IDeposit;
    product?:IProducts
}