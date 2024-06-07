import { ICar, ICompany } from "@uni/contracts";
import { IBaseEntity } from "@uni/entities";
import { CompanyEntity } from "@uni/modules/company/entities/company.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name:'cars'})
export class CarEntity extends IBaseEntity implements ICar{
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

    @ManyToOne(()=>CompanyEntity,(company)=>company.car)
    company?: ICompany;
}