import { ICar, ICustom, ISupplier } from "@uni/contracts";
import { ICompany } from "@uni/contracts/company.model";
import { ISuccursal } from "@uni/contracts/succursal.model";
import { CarEntity } from "@uni/modules/car/entities/car.entity";
import { CategoriesEntity } from "@uni/modules/categories/entities/categorie.entity";
import { ICategorie } from "@uni/modules/categories/interfaces/icategories";
import {  CustomEntity } from "@uni/modules/custom/entities/custom.entity";
import { SupplierEntity } from "@uni/modules/supplier/entities/supplier.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
@Entity({name:'companys'})
export class CompanyEntity implements ICompany {
    @PrimaryGeneratedColumn()
    id?: string;
    @Column()
    name: string;
    @Column()
    isDefault: boolean;
    @Column()
    valueDate?: Date;
    @Column()
    status?: string;
    @Column()
    overview: string;
    @Column()
    totalEmployees: number;
    @Column()
    timeZone?: string;
    @Column()
    imageUrl?: string;
    @Column()
    isArchived?: boolean;
    @Column()
    isActive?: boolean;
    @CreateDateColumn()
    createAt?: Date;
    @UpdateDateColumn()
    updateAt: Date;
    @DeleteDateColumn()
    deleteAt?: Date;

    @OneToMany(()=>CompanyEntity,(company)=>company.succersale)
    succersale?: ISuccursal[];

    
    @OneToMany(()=>CustomEntity,(custom)=>custom.company,{
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
    })
    @JoinColumn()
    custom?: ICustom[];

  @OneToMany(()=>SupplierEntity,(supplier)=>supplier.company,{
    onDelete:"CASCADE",
    onUpdate:'CASCADE'
  })
  @JoinColumn()
  supplier?: ISupplier[];
  
  @OneToMany(()=>CategoriesEntity,(categorie)=>categorie.company)
  categorie?: ICategorie[];
  
  @OneToMany(()=>CarEntity,(car)=>car.company)
  car?: ICar[];

}