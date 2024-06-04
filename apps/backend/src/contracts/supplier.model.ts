import { IBaseCompanyEntity, ISupply } from ".";

export interface ISupplier extends IBaseCompanyEntity{
        fullname:string;
        phone:string;
        mail:string;
        adress:string;
        supply?:ISupply[]

}