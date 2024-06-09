import { IsEmail, IsMobilePhone, IsNotEmpty, IsString } from "class-validator";

export class DepositDto {
    @IsNotEmpty()
    @IsString()
    designation: string;
    
    @IsString()
    @IsEmail()
    mail: string;
    
    @IsNotEmpty()
    @IsString()
    adresse: string;
    
    @IsString()
    @IsMobilePhone()
    phone: string;

}