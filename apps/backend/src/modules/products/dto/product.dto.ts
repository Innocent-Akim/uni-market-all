import { ICompany, ISuccursal } from "@uni/contracts";
import { ICategorie } from "@uni/modules/categories/interfaces/icategories";
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
    categorieId:ICategorie['id']

    @IsNotEmpty()
    @IsString()
    companyId:ICompany['id']
}