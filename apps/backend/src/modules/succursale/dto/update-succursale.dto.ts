import { ICompany } from "@uni/contracts";
import { Type } from "class-transformer";
import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdateSuccursaleDto {
    @IsNotEmpty() 
    @IsString()
    id:string;

    @IsOptional() 
    @IsString()
    designation: string;

    @IsOptional() 
    @IsString()
    adresse: string;

    @IsOptional()
    @IsString()
    phone: string;

    @IsOptional()
    @IsEmail()
    @IsString()
    mail: string;

    @IsOptional()
    @Type(() => Number)
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