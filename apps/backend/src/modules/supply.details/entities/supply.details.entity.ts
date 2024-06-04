import { IProducts, ISupply, ISupplyDetails } from "@uni/contracts";
import { ProductsEntity } from "@uni/modules/products/entities/products.entity";
import { SupplyEntity } from "@uni/modules/supply/entities/supply.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
@Entity({name:'supply_details'})
export class SupplyDetailsEntity implements ISupplyDetails{
    @PrimaryGeneratedColumn('uuid')
    id?: string;
    @Column()
    qte: number;
    @Column()
    pu: number;
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
    @ManyToOne(()=>ProductsEntity,(product)=>product.supply_details)

    @JoinColumn()
    product?: IProducts;
    @ManyToOne(()=>SupplyEntity,(supply)=>supply.supply_details,{
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
    })
    @JoinColumn()
    supply?: ISupply;
}