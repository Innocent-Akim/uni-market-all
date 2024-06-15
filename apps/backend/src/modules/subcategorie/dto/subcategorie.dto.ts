import { ICategorie } from "@uni/modules/categories/interfaces/icategories";
import { IsNotEmpty, IsString } from "class-validator";

export class SubcategorieDto{
    @IsNotEmpty()
    @IsString()
    designation:string;

    @IsNotEmpty()
    @IsString()
    categories:ICategorie
}