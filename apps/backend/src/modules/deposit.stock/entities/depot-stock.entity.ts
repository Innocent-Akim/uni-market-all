import { IDeposit } from "@uni/contracts/deposit.model";
import { IDepositSocks } from "@uni/contracts/deposit.stock";
import { IProducts } from "@uni/contracts/products.model";
import { IBaseEntity } from "@uni/entities";
import { DepositEntity } from "@uni/modules/deposit/entities/deposit.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
@Entity({name:"deposit_stocks"})
export class DepositStockEntity extends IBaseEntity implements IDepositSocks {

    @Column()
    qte: number;

    @Column()
    qteAlerte: number;

    @ManyToOne(()=> DepositEntity,(deposit)=>deposit.stock_deposit,{
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
    })
    deposit?: IDeposit;
    @ManyToOne(()=>DepositStockEntity,(stock)=>stock.product,{
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
    })
    product?: IProducts;




 }