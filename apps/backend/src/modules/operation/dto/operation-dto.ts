import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class OperationDto{
    
   @IsNotEmpty()
   @IsNumber()
    amount: number;

    @IsNotEmpty()
    @IsString()
    amount_in_full: string;

    devise: string;


    beneficiery: string;


    groupe: string;


    libelle: string;


    wording: string;


    currentDate: Date;


    types: string;


    observation: string;
}