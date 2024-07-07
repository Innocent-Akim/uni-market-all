import { ApiProperty } from "@nestjs/swagger";
import { IUser } from "@uni/contracts";
import { ICompany } from "@uni/contracts/company.model";
import { IDeposit } from "@uni/contracts/deposit.model";
import { IProducts } from "@uni/contracts/products.model";
import { ISuccursal } from "@uni/contracts/succursal.model";
import { IBaseEntity } from "@uni/entities";
import { CompanyEntity } from "@uni/modules/company/entities/company.entity";
import { DepositEntity } from "@uni/modules/deposit/entities/deposit.entity";
import { ProductsEntity } from "@uni/modules/products/entities/products.entity";
import { UserEntity } from "@uni/modules/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, RelationId} from "typeorm";

@Entity({ name: 'succursales' })
export class SuccursaleEntity extends IBaseEntity implements ISuccursal {
    
    @Column()
    designation: string;

    @Column()
    adresse: string;

    @Column({nullable:true})
    phone: string;

    @Column({nullable:true})
    mail: string;

    @Column()
    totalEmployees: number;

    @Column()
    imageUrl?: string;

    @Column()
    overview: string;

    @Column()
    timeZone?: string;

    @Column()
    status?: string;

 
    @ManyToOne(() => CompanyEntity, (company) => company.succersale, {
        onDelete: 'SET NULL',
        cascade: true,
        onUpdate: 'CASCADE',
        nullable: true
    })
    company?: ICompany;

@OneToMany(()=>DepositEntity,(deposit)=>deposit.succursale)
deposit?: IDeposit[];

@OneToMany(()=>UserEntity,(user)=>user.succursale)
user?: IUser[];

@RelationId((t:SuccursaleEntity)=>t.company)
companyId?: string;

}