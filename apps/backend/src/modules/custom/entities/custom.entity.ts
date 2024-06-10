import { ICompany, ICustom, IInvoiceHeader } from "@uni/contracts";
import { IBaseEntity } from "@uni/entities";
import { CompanyEntity } from "@uni/modules/company/entities/company.entity";
import { InvoiceHeaderEntity } from "@uni/modules/invoice.header/entities/invoice.header.entity";
import { IsOptional } from "class-validator";
import { Column, Entity, ManyToOne, OneToMany } from "typeorm";

@Entity({ name: 'customs' })
export class CustomEntity extends IBaseEntity implements ICustom {
    @Column()
    fullname: string;

    @Column()
    phone: string;

    @IsOptional()
    @Column()
    email: string;

    @Column()
    adresse?: string;

    @Column()
    type_custom: string;

    @ManyToOne(() => CompanyEntity, (company) => company.custom, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    company?: ICompany;

    @OneToMany(() => InvoiceHeaderEntity, (invoice) => invoice.custom)
    invoice?: IInvoiceHeader[];
}