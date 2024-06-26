import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ICategorie } from "../interfaces/icategories";
import { ICompany, IProducts, ISubcategorie } from "@uni/contracts";
import { CompanyEntity } from "@uni/modules/company/entities/company.entity";
import { ProductsEntity } from "@uni/modules/products/entities/products.entity";
import { IBaseEntity } from "@uni/entities";
import { SubcategorieEntity } from "@uni/modules/subcategorie/entities/subcategorie.entity";
@Entity({ name: 'categories' })
export class CategoriesEntity extends IBaseEntity implements ICategorie {

    @Column()
    designation: string;
    
    @ManyToOne(()=>CompanyEntity,(company)=>company.categorie)
    company?: ICompany;

    @OneToMany(()=>SubcategorieEntity,(subcategorie)=>subcategorie.categorie)
    subcategorie?: ISubcategorie[];

    

}