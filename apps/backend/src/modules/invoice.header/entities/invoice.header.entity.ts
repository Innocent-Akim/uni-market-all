import { ICustom, IDeposit, IInvoiceDetails, IInvoiceHeader, IPayment } from "@uni/contracts";
import { IBaseEntity } from "@uni/entities";
import { CustomEntity } from "@uni/modules/custom/entities/custom.entity";
import { DepositEntity } from "@uni/modules/deposit/entities/deposit.entity";
import { InvoiceDetailsEntity } from "@uni/modules/invoice.details/entities/invoice.details.entity";
import { PaymentEntity } from "@uni/modules/payment/entities/payment.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name:'invoice_header'})
export class InvoiceHeaderEntity extends IBaseEntity implements IInvoiceHeader{
    @Column()
    typeInvoice: string;

    @Column()
    dateInvoice?: Date;

    @Column()
    check?: boolean;

    @Column()
    sales_types: string;

    @ManyToOne(()=>CustomEntity,(custom)=>custom.invoice)
    custom?: ICustom;

    @ManyToOne(()=>DepositEntity,(deposit)=>deposit.invoice_header)
    deposit?: IDeposit;
    
    @OneToMany(()=>InvoiceDetailsEntity,(details)=>details.invoice)
    invoice_dataits?: IInvoiceDetails[];

    @OneToMany(()=>PaymentEntity,(payement)=>payement.invoice_header)
    payment?: IPayment[];

}