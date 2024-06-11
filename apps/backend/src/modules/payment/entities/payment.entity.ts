import { IInvoiceHeader, IPayment } from "@uni/contracts";
import { IBaseEntity } from "@uni/entities";
import { InvoiceHeaderEntity } from "@uni/modules/invoice.header/entities/invoice.header.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name:'payments'})
export class PaymentEntity extends IBaseEntity implements IPayment{
  
    @Column()
    amount: number;

    @Column()
    currentDate: Date;
    
    @ManyToOne(()=>InvoiceHeaderEntity,(invoice)=>invoice.payment)
    invoice_header?: IInvoiceHeader;
  
}