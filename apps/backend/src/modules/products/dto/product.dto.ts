import { ICompany, ISubcategorie, ISuccursal } from "@uni/contracts";
import { ICategorie } from "@uni/modules/categories/interfaces/icategories";
import { Type } from "class-transformer";
import { IsNotEmpty,  IsOptional,  IsString } from "class-validator";

export class ProductDto{
    @IsNotEmpty()
    @IsString()
    designation: string;
    
    @IsNotEmpty()
    @IsString()
    forme: string;
    
    @IsNotEmpty()
    @Type(()=>Number)
    qteAlerte: number;
    
    @IsOptional()
    @Type(()=>Number)
    pudetail: number;
    
    @IsOptional()
    @Type(()=>Number)
    pugros: number;
    
    @IsNotEmpty()
    @IsString()
    subcategorieId:ISubcategorie['id']

    @IsNotEmpty()
    @IsString()
    companyId:ICompany['id']
}