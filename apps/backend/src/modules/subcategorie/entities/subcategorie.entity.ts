import { ISubcategorie } from "@uni/contracts";
import { IBaseEntity } from "@uni/entities";
import { CategoriesEntity } from "@uni/modules/categories/entities/categorie.entity";
import { ICategorie } from "@uni/modules/categories/interfaces/icategories";
import { Column, Entity, ManyToOne } from "typeorm";

@Entity({name:'subcategories'})
export class SubcategorieEntity extends IBaseEntity implements ISubcategorie{
    @Column()
    designation: string;
    
    @ManyToOne(()=>CategoriesEntity,(categorie)=>categorie.subcategorie)
    categorie: ICategorie; 
}