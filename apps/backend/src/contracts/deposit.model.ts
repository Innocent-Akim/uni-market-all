import { IBaseSuccursale, IDepositSocks, IInvoiceHeader, ISheetDeposit, IStore, ISuccursal, ISupply, IUser } from ".";

export interface IDeposit extends IBaseSuccursale{
    designation:string;
    adresse:string;
    phone:string;
    mail:string; 
    store?:IStore[]
    succursale?:ISuccursal
    stock_deposit?:IDepositSocks[];
    invoice_header?:IInvoiceHeader[]
    supply?:ISupply[]
    sheet_deposit?:ISheetDeposit[],
    user?:IUser[]

}