import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class ProductDto{

    @IsNotEmpty()
    @IsString()
    designation: string;
    
    @IsNotEmpty()
    @IsString()
    forme: string;
    
    @IsNotEmpty()
    @IsNumber()
    qteAlerte: number;
    
    @IsNumber()
    pudetail: number;

    @IsNumber()
    pugros: number;
    
    @IsNotEmpty()
    @IsString()
    categorieId:string

    @IsNotEmpty()
    @IsString()
    succursaleId:string
}