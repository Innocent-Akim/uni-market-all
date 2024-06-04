import { IInvoiceDetails, ISheetDeposit, ISheetStore, ISupplyDetails } from "@uni/contracts";
import { IDepositSocks } from "@uni/contracts/deposit.stock";
import { IProducts } from "@uni/contracts/products.model";
import { IStoreStocks } from "@uni/contracts/store.stock";
import { ISuccursal } from "@uni/contracts/succursal.model";
import { CategoriesEntity } from "@uni/modules/categories/entities/categorie.entity";
import { ICategorie } from "@uni/modules/categories/interfaces/icategories";
import { DepositStockEntity } from "@uni/modules/deposit.stock/entities/depot-stock.entity";
import { InvoiceDetailsEntity } from "@uni/modules/invoice.details/entities/invoice.details.entity";
import { SheetDepositEntity } from "@uni/modules/sheet.deposit/entities/sheet.deposit.entity";
import { SheetStoreEntity } from "@uni/modules/sheet.store/entities/sheet.store.entity";
import { StoreStockEntity } from "@uni/modules/store.stock/entities/store.stock.entity";
import { SuccursaleEntity } from "@uni/modules/succursale/entities/succursale.entity";
import { SupplyDetailsEntity } from "@uni/modules/supply.details/entities/supply.details.entity";

import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'products' })
export class ProductsEntity implements IProducts {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column({ unique: true })
    designation: string;
    @Column()
    forme: string;
    @Column()
    qteAlerte: number;
    @Column()
    pudetail: number;
    @Column()
    pugros: number;
    @Column({ default: true })
    isActive?: boolean;
    @Column({ default: true })
    isArchived?: boolean;
    @CreateDateColumn()
    createAt?: Date;
    @UpdateDateColumn()
    updateAt: Date;
    @DeleteDateColumn()
    deleteAt?: Date;
    @ManyToOne(() => SuccursaleEntity, (succursal) => succursal.products, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    })
    @JoinColumn()
    succursale: ISuccursal;

    @OneToMany(() => StoreStockEntity, (store) => store.product)
    @JoinColumn()
    stock_store?: IStoreStocks[];

    @OneToMany(() => DepositStockEntity, (deposit) => deposit?.product, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    stock_deposit?: IDepositSocks[];

    @OneToMany(() => InvoiceDetailsEntity, (details) => details.product)
    invoice_details?: IInvoiceDetails[];

    @OneToMany(() => SupplyDetailsEntity, (details) => details.product)
    supply_details?: ISupplyDetails[];

    @ManyToOne(() => CategoriesEntity, (categorie) => categorie.product)
    categorie?: ICategorie;

    @OneToMany(() => SheetStoreEntity, (sheetstore) => sheetstore.store)
    sheet_store?: ISheetStore[];

    @OneToMany(() => SheetDepositEntity, (sheetdeposit) => sheetdeposit.product)
    @JoinColumn()
    sheet_deposit?: ISheetDeposit[];

}