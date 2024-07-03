import { IBaseCompanyEntity, IBaseEntityModel, ICompany, IDeposit, IStore, ISuccursal } from ".";
/**
 *
 *
 * @export
 * @interface IUser
 * @extends {IBaseEntityModel}
 */
export interface IUser extends IBaseEntityModel{
    name:string;
    lastname?:string
    email?:string;
    phone?:string
    password:string;
    refreshToken?:string;
    emailVerified?:Date;
    refreshTokenExpiration?:Date,
    image:string;
    lastLogin?:Date;
    succursale?:ISuccursal;
    deposit?:IDeposit;
    store?:IStore;
    companyId?:ICompany['id'];
    company?:ICompany;
    succursaleId?:ISuccursal['id'];
    depositId?:IDeposit['id'];
    storeId?:IStore['id']
    

}



export interface IGetUser extends IBaseEntityModel{
    name:string;
    lastname?:string
    email?:string;
    phone?:string
    password:string;
    refreshToken?:string;
    emailVerified?:Date;
    refreshTokenExpiration?:Date,
    image:string;
    lastLogin?:Date;
    companyId?:ICompany['id'];
    succursaleId?:ISuccursal['id'];
    depositId?:IDeposit['id'];
    storeId?:IStore['id']

}