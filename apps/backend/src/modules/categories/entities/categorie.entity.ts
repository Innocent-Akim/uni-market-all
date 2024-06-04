import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ICategorie } from "../interfaces/icategories";
import { ICompany, IProducts } from "@uni/contracts";
import { CompanyEntity } from "@uni/modules/company/entities/company.entity";
import { ProductsEntity } from "@uni/modules/products/entities/products.entity";
@Entity({ name: 'categories' })
export class CategoriesEntity implements ICategorie {
    @PrimaryGeneratedColumn()
    id: string;
    @Column()
    designation: string;
    @Column({ default: true })
    isActive?: boolean;
    @Column({ default: true })
    isArchived?: boolean;
    @CreateDateColumn()
    createdAt?: Date;
    @UpdateDateColumn()
    updateAt?: Date;
    @DeleteDateColumn()
    deletedAt?: Date;
    @ManyToOne(()=>CompanyEntity,(company)=>company.categorie)
    company?: ICompany;
    
    @OneToMany(()=>ProductsEntity,(product)=>product.categorie)
    product?: IProducts[];

}