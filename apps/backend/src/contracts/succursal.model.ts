import { IUser } from ".";
import { IBaseCompanyEntity } from "./base-entity.model";
import { IDeposit } from "./deposit.model";
import { IProducts } from "./products.model";

export interface ISuccursal extends IBaseCompanyEntity{
    designation:string;
    adresse:string;
    phone:string;
    mail:string; 
    totalEmployees:number;
    status?:string;
    imageUrl?:string;
    timeZone?: string;
    overview:string
    products?:IProducts[];
    deposit?:IDeposit[],
    user?:IUser[]

}