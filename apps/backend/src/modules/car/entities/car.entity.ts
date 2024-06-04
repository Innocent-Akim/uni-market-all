import { ICar, ICompany } from "@uni/contracts";
import { CompanyEntity } from "@uni/modules/company/entities/company.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name:'cars'})
export class CarEntity implements ICar{
    @PrimaryGeneratedColumn('uuid')
    id?: string;

    @Column()
    designation: string;

    @Column()
    plaque: string;

    @Column()
    id_chassie: string;

    @Column()
    color: string;

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

    @ManyToOne(()=>CompanyEntity,(company)=>company.car)
    company?: ICompany;
}