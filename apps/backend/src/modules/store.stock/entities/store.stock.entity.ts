import { IDeposit } from "@uni/contracts/deposit.model";
import { IProducts } from "@uni/contracts/products.model";
import { IStore } from "@uni/contracts/store.model";
import { IStoreStocks } from "@uni/contracts/store.stock";
import { IBaseEntity } from "@uni/entities";
import { ProductsEntity } from "@uni/modules/products/entities/products.entity";
import { StoreEntity } from "@uni/modules/store/entities/store.entity";
import { Column,Entity, ManyToOne } from "typeorm";
@Entity({ name: 'store_stocks' })
export class StoreStockEntity extends IBaseEntity implements IStoreStocks {

    @Column()
    qte: number;

    @Column()
    qteAlerte: number;

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