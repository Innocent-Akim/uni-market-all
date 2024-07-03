import { IBaseCompanyEntity } from "./base-entity.model";
import { ICustom } from "./custom.model";
import { ISuccursal } from "./succursal.model";
import { ISupplier } from "./supplier.model";
import { ICar } from "./car.model";
import { ICategorie } from "@uni/modules/categories/interfaces/icategories";
import { IProducts, IUser } from ".";

export interface ICompany extends IBaseCompanyEntity{
    name:string;
    phone?:string;
    email?:string;
    address:string;
    isDefault:boolean;
    valueDate?:Date;
    totalEmployees:number;
    status?:string;
    imageUrl?:string;
    timeZone?: string;
    overview:string;
    products?:IProducts[];
    custom?:ICustom[];
    supplier?:ISupplier[];
    categorie?:ICategorie[];
    car?:ICar[]
    user?:IUser[]
}