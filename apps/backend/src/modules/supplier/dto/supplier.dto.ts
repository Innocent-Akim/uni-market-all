import { IsString } from "class-validator";

export class SupplierDto {
    @IsString()
    fullname: string;
    
    @IsString()
    phone: string;
    
    @IsString()
    mail: string;
    
    @IsString()
    adress: string;
}