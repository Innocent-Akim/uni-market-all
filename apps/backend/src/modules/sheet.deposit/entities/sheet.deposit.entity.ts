import { IDeposit, IProducts, ISheetDeposit } from "@uni/contracts";
import { DepositEntity } from "@uni/modules/deposit/entities/deposit.entity";
import { ProductsEntity } from "@uni/modules/products/entities/products.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
@Entity({name:'sheet_deposit'})
export class SheetDepositEntity implements ISheetDeposit{
    @PrimaryGeneratedColumn('uuid')
    id?: string;
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