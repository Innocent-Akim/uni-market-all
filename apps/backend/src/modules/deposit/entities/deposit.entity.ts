import { IInvoiceHeader, ISheetDeposit, ISupply } from "@uni/contracts";
import { IDeposit } from "@uni/contracts/deposit.model";
import { IDepositSocks } from "@uni/contracts/deposit.stock";
import { IStore } from "@uni/contracts/store.model";
import { ISuccursal } from "@uni/contracts/succursal.model";
import { IBaseEntity } from "@uni/entities";
import { DepositStockEntity } from "@uni/modules/deposit.stock/entities/depot-stock.entity";
import { InvoiceHeaderEntity } from "@uni/modules/invoice.header/entities/invoice.header.entity";
import { SheetDepositEntity } from "@uni/modules/sheet.deposit/entities/sheet.deposit.entity";
import { StoreEntity } from "@uni/modules/store/entities/store.entity";
import { SuccursaleEntity } from "@uni/modules/succursale/entities/succursale.entity";
import { SupplierEntity } from "@uni/modules/supplier/entities/supplier.entity";
import { Column,Entity, ManyToOne, OneToMany} from "typeorm";

@Entity({ name: 'deposits' })
export class DepositEntity extends IBaseEntity implements IDeposit {

    @Column()
    designation: string;

    @Column()
    mail: string;

    @Column()
    adresse: string;

    @Column()
    phone: string;

   
    @OneToMany(() => StoreEntity, (entity) => entity.deposit, {
        onDelete: 'CASCADE'

    })
    store: IStore[];

    @ManyToOne(() => SuccursaleEntity, (succurcusale) => succurcusale.deposit)
    succursale?: ISuccursal;

    @OneToMany(() => DepositStockEntity, (deposit_stock) => deposit_stock.deposit)
    stock_deposit?: IDepositSocks[];

    @OneToMany(() => InvoiceHeaderEntity, (invoice) => invoice.deposit)
    invoice_header?: IInvoiceHeader[];

    @OneToMany(()=>SupplierEntity,(supply)=>supply.company,{
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
    })
    supply?: ISupply[];
    @OneToMany(()=>SheetDepositEntity,(sheetdeposit)=>sheetdeposit.deposit)
    sheet_deposit?: ISheetDeposit[];

    

}