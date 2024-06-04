import { ICompany, ICustom, IInvoiceHeader } from "@uni/contracts";
import { CompanyEntity } from "@uni/modules/company/entities/company.entity";
import { InvoiceHeaderEntity } from "@uni/modules/invoice.header/entities/invoice.header.entity";
import { IsOptional } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'customs' })
export class CustomEntity implements ICustom {
    @PrimaryGeneratedColumn('uuid')
    id?: string;

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
    isActive?: boolean;

    @Column()
    isArchived?: boolean;

    @Column()
    type_custom: string;

    @CreateDateColumn()
    createAt?: Date;

    @UpdateDateColumn()
    updateAt?: Date;

    @DeleteDateColumn()
    deleteAt?: Date;

    @ManyToOne(() => CompanyEntity, (company) => company.custom, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    company?: ICompany;

    @OneToMany(() => InvoiceHeaderEntity, (invoice) => invoice.custom)
    invoice?: IInvoiceHeader[];
}