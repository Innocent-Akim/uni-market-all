import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CustomDto{
    @IsNotEmpty()
    @IsString()
    fullname: string;
   
    @IsNotEmpty()
    @IsString()
    phone: string;


    @IsOptional()
    @IsString()
    email: string;

    @IsOptional()
    @IsString()
    adresse?: string;

    @IsNotEmpty()
    @IsString()
    type_custom: string;  
}