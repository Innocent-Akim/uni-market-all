import { IBaseEntityModel, IInvoiceHeader, IProducts } from ".";

export interface IInvoiceDetails extends IBaseEntityModel{
        qte:number;
        price:number;
        product?:IProducts;
        invoice?:IInvoiceHeader;
}


