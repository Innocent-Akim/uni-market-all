import { IInvoiceDetails, IInvoiceHeader, IProducts } from "@uni/contracts";
import { IBaseEntity } from "@uni/entities";
import { InvoiceHeaderEntity } from "@uni/modules/invoice.header/entities/invoice.header.entity";
import { ProductsEntity } from "@uni/modules/products/entities/products.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
@Entity({ name: 'invoice_detais' })
export class InvoiceDetailsEntity extends IBaseEntity implements IInvoiceDetails {
  
    @Column()
    price: number;

    @Column()
    qte: number;

    @Column({ default: true })
    isActive?: boolean;

    @ManyToOne(() => InvoiceHeaderEntity, (header) => header.invoice_dataits)
    invoice?: IInvoiceHeader;

    @ManyToOne(() => ProductsEntity, (product) => product.invoice_details)
    product?: IProducts;


}