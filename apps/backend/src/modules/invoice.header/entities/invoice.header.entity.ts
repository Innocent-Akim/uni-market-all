import { RequestContext } from "@uni/context";
import { ICustom, IDeposit, IInvoiceDetails, IInvoiceHeader, IPayment } from "@uni/contracts";
import { IBaseEntity } from "@uni/entities";
import { CustomEntity } from "@uni/modules/custom/entities/custom.entity";
import { DepositEntity } from "@uni/modules/deposit/entities/deposit.entity";
import { InvoiceDetailsEntity } from "@uni/modules/invoice.details/entities/invoice.details.entity";
import { PaymentEntity } from "@uni/modules/payment/entities/payment.entity";
import { BeforeInsert, Column, Entity, ManyToOne, OneToMany, getRepository } from "typeorm";

@Entity({ name: 'invoice_headers' })
export class InvoiceHeaderEntity extends IBaseEntity implements IInvoiceHeader {
  @Column({ nullable: false, update: false })
  indexNumber?: number;

  @Column()
  typeInvoice: string;

  @Column()
  dateInvoice?: Date;

  @Column()
  check?: boolean;

  @Column()
  sales_types: string;

  @ManyToOne(() => CustomEntity, (custom) => custom.invoice)
  custom?: ICustom;

  @ManyToOne(() => DepositEntity, (deposit) => deposit.invoice_header)
  deposit?: IDeposit;

  @OneToMany(() => InvoiceDetailsEntity, (details) => details.invoice)
  invoice_dataits?: IInvoiceDetails[];

  @OneToMany(() => PaymentEntity, (payement) => payement.invoice_header)
  payment?: IPayment[];

  @BeforeInsert()
  async generateInvoiceId() {
    const depositId = RequestContext.currentDepositId();
    const latestInvoice = await getRepository(InvoiceHeaderEntity)
    .createQueryBuilder('invoice_headers')
    .where('invoice_headers.id = :id', { id: depositId })
    .select('MAX(invoice_headers.indexNumber)', 'max')
    .getRawOne();
  this.indexNumber = latestInvoice.max ? latestInvoice.max + 1 : 1;
  }
}