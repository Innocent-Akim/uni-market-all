import { IInvoiceHeader, IProducts } from "@uni/contracts";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class InvoiceDetailsDto{
    @IsNotEmpty()
    @IsNumber()
    price: number;
    
    @IsNotEmpty()
    @IsNumber()
    qte: number;

    @IsNotEmpty()
    @IsString()
    productId:IProducts['id'];

    @IsNotEmpty()
    @IsString()
    invoiceId:IInvoiceHeader['id']
}