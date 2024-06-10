import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class OperationDto{
    
   @IsNotEmpty()
   @IsNumber()
    amount: number;

    @IsNotEmpty()
    @IsString()
    amount_in_full: string;

    @IsNotEmpty()
    @IsString()
    devise: string;

    @IsNotEmpty()
    @IsString()
    beneficiery: string;

    @IsNotEmpty()
    @IsString()
    groupe: string;

    @IsNotEmpty()
    @IsString()
    libelle: string;

    @IsNotEmpty()
    @IsString()
    wording: string;

    @IsNotEmpty()
    @IsDate()
    currentDate: Date;

    @IsNotEmpty()
    @IsString()
    types: string;

    @IsNotEmpty()
    @IsString()
    observation: string;
}