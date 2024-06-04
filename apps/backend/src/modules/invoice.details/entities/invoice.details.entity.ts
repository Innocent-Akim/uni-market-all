import { IInvoiceDetails, IInvoiceHeader, IProducts } from "@uni/contracts";
import { InvoiceHeaderEntity } from "@uni/modules/invoice.header/entities/invoice.header.entity";
import { ProductsEntity } from "@uni/modules/products/entities/products.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
@Entity({ name: 'invoice_detais' })
export class InvoiceDetailsEntity implements IInvoiceDetails {
    @PrimaryGeneratedColumn('uuid')
    id?: string;
    @Column()
    price: number;
    @Column()
    qte: number;
    @Column({ default: true })
    isActive?: boolean;
    @Column({ default: true })
    isArchived?: boolean;
    @CreateDateColumn()
    createAt?: Date;
    @UpdateDateColumn()
    updateAt?: Date;
    @DeleteDateColumn()
    deleteAt?: Date;
    @ManyToOne(() => InvoiceHeaderEntity, (header) => header.invoice_dataits)
    invoice?: IInvoiceHeader;
    @ManyToOne(() => ProductsEntity, (product) => product.invoice_details)
    product?: IProducts;


}