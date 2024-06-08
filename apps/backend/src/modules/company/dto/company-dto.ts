import { Type } from "class-transformer";
import { IsBoolean,IsNotEmpty, IsString  } from "class-validator";

export class CompanyDTO{

    @IsNotEmpty()
    @IsString() 
    name: string;

    @IsBoolean()
    isDefault: boolean;

    @IsBoolean()
    valueDate?: Date;

    @IsString()
    status?: string;

    @IsString()
    overview: string;

    @Type(()=>Number)
    totalEmployees: number;


    timeZone?: string;


    imageUrl?: string;
}