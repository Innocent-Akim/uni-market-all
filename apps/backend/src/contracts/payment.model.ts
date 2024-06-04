import { IBaseEntityModel, IInvoiceHeader } from ".";

export interface IPayment extends IBaseEntityModel{
    amount:number;
    currentDate:Date;
    invoice_header?:IInvoiceHeader
}