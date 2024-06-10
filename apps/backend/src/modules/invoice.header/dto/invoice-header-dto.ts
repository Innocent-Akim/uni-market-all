import { ICustom, IDeposit } from "@uni/contracts";
import { IsBoolean, IsDateString, IsNotEmpty, IsString } from "class-validator";

export class InvoiceHeaderDto{

    @IsNotEmpty()
    @IsString()
    typeInvoice: string;
    
    @IsNotEmpty()
    @IsDateString()
    dateInvoice: Date;
    
    @IsNotEmpty()
    @IsBoolean()
    check: boolean;
    
    @IsNotEmpty()
    @IsString()
    sales_types: string;
    
    @IsNotEmpty()
    @IsString()
    customId:ICustom['id'];
    
    @IsNotEmpty()
    @IsString()
    depositId:IDeposit['id']
 


}