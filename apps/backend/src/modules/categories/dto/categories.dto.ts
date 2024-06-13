import { ICompany } from "@uni/contracts";
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CategoriesDto {
    @IsNotEmpty()
    @IsString()
    designation: string;

    @IsNotEmpty()
    @IsString()
    companyId: ICompany['id']

    @IsOptional()
    @IsBoolean()
    isActive:boolean
    
    @IsOptional()
    @IsBoolean()
    isArchived:boolean

}