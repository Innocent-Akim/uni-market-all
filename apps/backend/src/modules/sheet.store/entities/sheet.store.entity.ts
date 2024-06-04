import { IProducts, ISheetStore, IStore } from "@uni/contracts";
import { ProductsEntity } from "@uni/modules/products/entities/products.entity";
import { StoreEntity } from "@uni/modules/store/entities/store.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name:'sheet_store'})
export class SheetStoreEntity implements ISheetStore{
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
    isActive?: boolean;
    @Column()
    isArchived?: boolean;
    @Column()
    currentDate: Date;
    @CreateDateColumn()
    createAt?: Date;
    @UpdateDateColumn()
    updateAt?: Date;
    @DeleteDateColumn()
    deleteAt?: Date;

    @ManyToOne(()=>ProductsEntity,(products)=>products.sheet_store,{
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
    })
    product?: IProducts;

    @ManyToOne(()=>StoreEntity,(store)=>store.sheet_store,{
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
    })
    store: IStore;


}