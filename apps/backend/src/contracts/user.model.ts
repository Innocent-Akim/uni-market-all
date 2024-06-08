import { IBaseCompanyEntity } from "./base-entity.model";

export interface IUser extends IBaseCompanyEntity{
    name:string;
    email:string;
    emailVerified:Date;
    image:string;
}