import { IBaseCompanyEntity } from ".";
/**
 *
 *
 * @export
 * @interface IUser
 * @extends {IBaseCompanyEntity}
 */
export interface IUser extends IBaseCompanyEntity{
    name:string;
    email:string;
    emailVerified:Date;
    image:string;
    
}