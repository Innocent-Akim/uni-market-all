import { ICompany, ISupplier, ISupply } from "@uni/contracts";
import { CompanyEntity } from "@uni/modules/company/entities/company.entity";
import { SupplyEntity } from "@uni/modules/supply/entities/supply.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name:"suppliers"})
export class SupplierEntity implements ISupplier{  
    @PrimaryGeneratedColumn('uuid')
    id?: string;
    @Column()
    fullname: string;
    @Column()
    phone: string;
    @Column()
    mail: string;
    @Column()
    adress: string;
    @Column()
    isActive?: boolean;
    @Column()
    isArchived?: boolean;
    @CreateDateColumn()
    createAt?: Date;
    @UpdateDateColumn()
    updateAt?: Date;
    @DeleteDateColumn()
    deleteAt?: Date;
    @ManyToOne(()=>CompanyEntity,(company)=>company.supplier,{
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
    })
    company?: ICompany;

@OneToMany(()=>SupplyEntity,(supply)=>supply.supplier,{
    onDelete:'CASCADE',
    onUpdate:'CASCADE'
})
    supply?: ISupply[];

}