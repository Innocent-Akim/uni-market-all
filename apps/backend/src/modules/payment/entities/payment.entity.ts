import { IInvoiceHeader, IPayment } from "@uni/contracts";
import { InvoiceHeaderEntity } from "@uni/modules/invoice.header/entities/invoice.header.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name:'payments'})
export class PaymentEntity implements IPayment{
    @PrimaryGeneratedColumn('uuid')
    id?: string;

    @Column()
    amount: number;

    @Column()
    currentDate: Date;

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

    @ManyToOne(()=>InvoiceHeaderEntity,(invoice)=>invoice.payment)
    invoice_header?: IInvoiceHeader;
  
}