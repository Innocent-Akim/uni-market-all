import { IDeposit, IProducts, ISheetDeposit } from "@uni/contracts";
import { IBaseEntity } from "@uni/entities";
import { DepositEntity } from "@uni/modules/deposit/entities/deposit.entity";
import { ProductsEntity } from "@uni/modules/products/entities/products.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
@Entity({name:'sheet_deposits'})
export class SheetDepositEntity extends IBaseEntity implements ISheetDeposit{
    @Column()
    initial_stock: number;
    
    @Column()
    out_stock: number;

    @Column()
    in_stock: number;

    @Column()
    end_stock: number;

    @Column()
    currentDate: Date;
    
    @ManyToOne(()=>ProductsEntity,(products)=>products.sheet_deposit,{
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
    })
    product?: IProducts;

    @ManyToOne(()=>DepositEntity,(deposit)=>deposit.sheet_deposit,{
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
    })
    deposit?: IDeposit;

}