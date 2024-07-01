import { IBaseCompanyEntity } from "./base-entity.model";
import { ICustom } from "./custom.model";
import { ISuccursal } from "./succursal.model";
import { ISupplier } from "./supplier.model";
import { ICar } from "./car.model";
import { ICategorie } from "@uni/modules/categories/interfaces/icategories";
import { IUser } from ".";

export interface ICompany extends IBaseCompanyEntity{
    name:string;
    isDefault:boolean;
    valueDate?:Date;
    totalEmployees:number;
    status?:string;
    imageUrl?:string;
    timeZone?: string;
    overview:string;
    succersale?:ISuccursal[];
    custom?:ICustom[];
    supplier?:ISupplier[];
    categorie?:ICategorie[];
    car?:ICar[]
    user?:IUser[]
}