import { IBaseCompanyEntity, IBaseEntityModel, ICompany, IDeposit, IStore, ISuccursal } from ".";
/**
 *
 *
 * @export
 * @interface IUser
 * @extends {IBaseCompanyEntity}
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
    company?:ICompany;
    succursale?:ISuccursal;
    deposit?:IDeposit;
    store?:IStore

}