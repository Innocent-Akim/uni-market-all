import { ICompany, IImages, IInvoiceDetails, ISheetDeposit, ISheetStore, ISubcategorie, ISupplyDetails } from "@uni/contracts";
import { IDepositSocks } from "@uni/contracts/deposit.stock";
import { IProducts } from "@uni/contracts/products.model";
import { IStoreStocks } from "@uni/contracts/store.stock";
import { IBaseEntity } from "@uni/entities";
import { CompanyEntity } from "@uni/modules/company/entities/company.entity";
import { DepositStockEntity } from "@uni/modules/deposit.stock/entities/depot-stock.entity";
import { ImageEntity } from "@uni/modules/images/entities/image.entity";
import { InvoiceDetailsEntity } from "@uni/modules/invoice.details/entities/invoice.details.entity";
import { SheetDepositEntity } from "@uni/modules/sheet.deposit/entities/sheet.deposit.entity";
import { SheetStoreEntity } from "@uni/modules/sheet.store/entities/sheet.store.entity";
import { StoreStockEntity } from "@uni/modules/store.stock/entities/store.stock.entity";
import { SubcategorieEntity } from "@uni/modules/subcategorie/entities/subcategorie.entity";
import { SupplyDetailsEntity } from "@uni/modules/supply.details/entities/supply.details.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, RelationId } from "typeorm";

@Entity({ name: 'products' })
export class ProductsEntity extends IBaseEntity implements IProducts {

    @Column()
    designation: string;

    @Column()
    forme: string;

    @Column()
    qteAlerte: number;

    @Column()
    pudetail: number;

    @Column()
    pugros: number;

    @ManyToOne(() => CompanyEntity, (company) => company.products, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
        nullable:true
    })
    @JoinColumn()
    company: ICompany;

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

    @ManyToOne(() => SubcategorieEntity, (categorie) => categorie.product, {
        nullable: true,
    })
    subcategorie?: ISubcategorie;

    @OneToMany(() => SheetStoreEntity, (sheetstore) => sheetstore.store)
    sheet_store?: ISheetStore[];

    @OneToMany(() => SheetDepositEntity, (sheetdeposit) => sheetdeposit.product)
    sheet_deposit?: ISheetDeposit[];

    @OneToMany(() => ImageEntity, (img) => img.product)
    image: IImages[];

    @RelationId((t: ProductsEntity) => t.company)
    companyId?: string;

}