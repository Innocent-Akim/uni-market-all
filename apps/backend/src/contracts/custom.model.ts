import { IBaseCompanyEntity } from ".";
import { IInvoiceHeader } from "./invoice.header";

export interface ICustom extends IBaseCompanyEntity {
    fullname: string;
    phone: string;
    adresse?: string;
    email: string;
    type_custom: string
    invoice?:IInvoiceHeader[]
}