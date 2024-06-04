import { ICompany } from "./company.model";
import { ISuccursal } from "./succursal.model";
import { IDeposit } from "./deposit.model";
import { IProducts } from "./products.model";
import { IBaseEntity } from "@uni/entities";

export interface IBaseSoftDeleteEntityModel{
    deleteAt?:Date;
}

export interface IBaseEntityModel extends IBaseSoftDeleteEntityModel{
    id?:string;
    readonly createAt?:Date;
    readonly updateAt?:Date;
    isActive?:boolean;
    isArchived?:boolean;
}

export interface IBaseCompanyEntity  extends IBaseEntityModel{
    companyId?:ICompany['id'];
    company?:ICompany
}

export interface IBaseSuccursale extends IBaseEntityModel{
    succursaleId?:ISuccursal['id'],
    succursale?:ISuccursal
}

export interface IBaseStore extends IBaseEntity{


}

export interface IBaseDeposit extends IBaseEntityModel{
    depositId?:IDeposit['id'];
    deposit?:IDeposit
}


export interface IBaseProduct extends IBaseDeposit{
    productId?:IProducts['id'];
    product?:IProducts
}


