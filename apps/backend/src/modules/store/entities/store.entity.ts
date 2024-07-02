import { ISheetStore, IUser } from "@uni/contracts";
import { IDeposit } from "@uni/contracts/deposit.model";
import { IStore } from "@uni/contracts/store.model";
import { IStoreStocks } from "@uni/contracts/store.stock";
import { IBaseEntity } from "@uni/entities";
import { DepositEntity } from "@uni/modules/deposit/entities/deposit.entity";
import { SheetStoreEntity } from "@uni/modules/sheet.store/entities/sheet.store.entity";
import { StoreStockEntity } from "@uni/modules/store.stock/entities/store.stock.entity";
import { UserEntity } from "@uni/modules/user/entities/user.entity";
import { Column, Entity, ManyToOne, OneToMany } from "typeorm";

@Entity({ name: 'stores' })
export class StoreEntity extends IBaseEntity implements IStore {
    @Column()
    designation: string;

    @Column()
    phone: string;

    @Column()
    mail: string;

    @Column()
    adresse: string;

    @ManyToOne(() => DepositEntity, (deposit) => deposit.store)
    deposit?: IDeposit;

    @OneToMany(() => StoreStockEntity, (stock) => stock.store)
    stock_store?: IStoreStocks[];

    @OneToMany(()=>SheetStoreEntity,(sheetstore)=>sheetstore.store)
    sheet_store?: ISheetStore[];
    
    @OneToMany(()=>UserEntity,(user)=>user.storeId,{
        nullable:true
    })
    user?: IUser[];

}