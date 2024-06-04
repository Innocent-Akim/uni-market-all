import { IDeposit, ISupplier, ISupply } from "@uni/contracts";
import { ISupplyDetails } from "@uni/contracts/supply-details.model";
import { DepositEntity } from "@uni/modules/deposit/entities/deposit.entity";
import { SupplierEntity } from "@uni/modules/supplier/entities/supplier.entity";
import { SupplyDetailsEntity } from "@uni/modules/supply.details/entities/supply.details.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'supplys' })
export class SupplyEntity implements ISupply {
    @PrimaryGeneratedColumn('uuid')
    id?: string;
    @Column()
    date_entre: Date;
    @Column({ default: true })
    isActive?: boolean;
    @Column({ default: true })
    isArchived?: boolean;
    @CreateDateColumn()
    createAt?: Date;
    @UpdateDateColumn()
    updateAt?: Date;
    @DeleteDateColumn()
    deleteAt?: Date;
    @ManyToOne(() => DepositEntity, (depot) => depot.supply,{
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
    })
    @JoinColumn()
    deposit?: IDeposit;

    @ManyToOne(() => SupplierEntity, (supplier) => supplier.supply,{
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
    })
    @JoinColumn()
    supplier?: ISupplier;
    
    @OneToMany(()=>SupplyDetailsEntity, (details)=>details.supply)
    supply_details?: ISupplyDetails;

}