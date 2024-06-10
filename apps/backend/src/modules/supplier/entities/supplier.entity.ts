import { ICompany, ISupplier, ISupply } from "@uni/contracts";
import { IBaseEntity } from "@uni/entities";
import { CompanyEntity } from "@uni/modules/company/entities/company.entity";
import { SupplyEntity } from "@uni/modules/supply/entities/supply.entity";
import { Column,Entity, ManyToOne, OneToMany } from "typeorm";

@Entity({name:'suppliers'})
export class SupplierEntity extends IBaseEntity implements ISupplier{  
 
    @Column()
    fullname: string;

    @Column()
    phone: string;

    @Column()
    mail: string;

    @Column()
    adress: string;
    
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