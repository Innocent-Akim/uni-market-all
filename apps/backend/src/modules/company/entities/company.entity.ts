import { ICar, ICustom, ISupplier } from "@uni/contracts";
import { ICompany } from "@uni/contracts/company.model";
import { ISuccursal } from "@uni/contracts/succursal.model";
import { IBaseEntity } from "@uni/entities";
import { CarEntity } from "@uni/modules/car/entities/car.entity";
import { CategoriesEntity } from "@uni/modules/categories/entities/categorie.entity";
import { ICategorie } from "@uni/modules/categories/interfaces/icategories";
import {  CustomEntity } from "@uni/modules/custom/entities/custom.entity";
import { SupplierEntity } from "@uni/modules/supplier/entities/supplier.entity";
import {  Column, Entity, JoinColumn, OneToMany } from "typeorm";
@Entity({name:'companys'})
export class CompanyEntity extends IBaseEntity implements ICompany {
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