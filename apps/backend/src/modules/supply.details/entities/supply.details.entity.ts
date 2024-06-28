import { IProducts, ISupply, ISupplyDetails } from "@uni/contracts";
import { IBaseEntity } from "@uni/entities";
import { ProductsEntity } from "@uni/modules/products/entities/products.entity";
import { SupplyEntity } from "@uni/modules/supply/entities/supply.entity";
import { Column,  Entity, JoinColumn, ManyToOne } from "typeorm";
@Entity({name:'supply_details'})
export class SupplyDetailsEntity extends IBaseEntity implements ISupplyDetails{

    @Column()
    qte: number;

    @Column()
    pu: number;

    @Column()
    isActive?: boolean;

    @Column()
    isArchived?: boolean;
    @ManyToOne(()=>ProductsEntity,(product)=>product.supply_details)

    @JoinColumn()
    product?: IProducts;

    @ManyToOne(()=>SupplyEntity,(supply)=>supply.supply_details,{
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
    })
    supply?: ISupply;
}