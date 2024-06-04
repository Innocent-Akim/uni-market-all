import { IDeposit } from "@uni/contracts/deposit.model";
import { IProducts } from "@uni/contracts/products.model";
import { IStore } from "@uni/contracts/store.model";
import { IStoreStocks } from "@uni/contracts/store.stock";
import { ProductsEntity } from "@uni/modules/products/entities/products.entity";
import { StoreEntity } from "@uni/modules/store/entities/store.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
@Entity({ name: 'store_stocks' })
export class StoreStockEntity implements IStoreStocks {
    @PrimaryGeneratedColumn('uuid')
    id?: string;
    @Column()
    qte: number;
    @Column()
    qteAlerte: number;
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
    @ManyToOne(() => ProductsEntity, (products) => products.stock_store, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    product?: IProducts;
    @ManyToOne(() => StoreEntity, (store) => store.stock_store, {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    })
    store?:IStore
} 