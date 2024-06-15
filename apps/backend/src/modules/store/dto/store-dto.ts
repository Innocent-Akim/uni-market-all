import { IDeposit } from "@uni/contracts";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class StoreDto{
    @IsNotEmpty()
    @IsString()
    designation: string;

  
    @IsNotEmpty()
    @IsString()
    phone: string;

  
    @IsOptional()
    @IsString()
    mail: string;

  
    @IsNotEmpty()
    @IsString()
    adresse: string;

    @IsNotEmpty()
    @IsString()
    deposit:IDeposit
}