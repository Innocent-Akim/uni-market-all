import { Type } from "class-transformer";
import { IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber, IsString } from "class-validator";

export class SuccursaleDto{
    @IsNotEmpty()
    @IsString()
    designation: string;
    
    @IsNotEmpty()
    @IsString()
    adresse: string;
    
    @IsNotEmpty()
    @IsString()
    @IsPhoneNumber()
    phone: string;
    
    @IsNotEmpty()
    @IsEmail()
    @IsString()
    mail: string;
    
    @IsOptional()
    @Type(()=>Number)
    totalEmployees: number;
     
    @IsOptional()
    @IsString()
    imageUrl?: string;

    @IsString()
    overview: string;

    
    @IsString()
    timeZone?: string;

    @IsString()
    status?: string;
}