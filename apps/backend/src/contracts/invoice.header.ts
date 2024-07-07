import { IBaseDeposit, ICustom, IPayment } from ".";
import { IInvoiceDetails } from "./invoice.details";

export interface IInvoiceHeader extends IBaseDeposit{
    indexNumber?:number
    dateInvoice?:Date;
    typeInvoice:string;
    sales_types:string;
    check?:boolean;
    custom?:ICustom
    invoice_dataits?:IInvoiceDetails[]
    payment?:IPayment[]

}