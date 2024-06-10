import { IInvoiceHeader } from "@uni/contracts";
import { IsDateString, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class PaymentDto{
    
    @IsNotEmpty()
    @IsNumber({allowInfinity:true})
    amount: number;
    
    @IsNotEmpty()
    @IsDateString()
    currentDate: Date;
   
    @IsNotEmpty()
    @IsString()
    invoiceHeaderId:IInvoiceHeader['id']
}