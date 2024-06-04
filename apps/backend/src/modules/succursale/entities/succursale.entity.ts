import { ApiProperty } from "@nestjs/swagger";
import { ICompany } from "@uni/contracts/company.model";
import { IDeposit } from "@uni/contracts/deposit.model";
import { IProducts } from "@uni/contracts/products.model";
import { ISuccursal } from "@uni/contracts/succursal.model";
import { CompanyEntity } from "@uni/modules/company/entities/company.entity";
import { DepositEntity } from "@uni/modules/deposit/entities/deposit.entity";
import { ProductsEntity } from "@uni/modules/products/entities/products.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'succursales' })
export class SuccursaleEntity implements ISuccursal {
    @ApiProperty({ type: () => String })
    @PrimaryGeneratedColumn('uuid')
    id?: string;
    @Column({ unique: true })
    designation: string;
    @Column()
    adresse: string;
    @Column()
    phone: string;
    @Column()
    mail: string;
    @Column()
    totalEmployees: number;
    @Column()
    imageUrl?: string;
    @Column()
    overview: string;
    @Column()
    timeZone?: string;
    @Column()
    isActive?: boolean;
    @Column()
    status?: string;
    @Column()
    isArchived?: boolean;
    @CreateDateColumn()
    createAt?: Date;
    @UpdateDateColumn()
    updateAt?: Date;
    @DeleteDateColumn({ nullable: true })
    deleteAt?: Date;
    @OneToMany(() => ProductsEntity, (products) => products.succursale, {
        onDelete: 'SET NULL',
        cascade: true,
        onUpdate: 'CASCADE',
    })
    @JoinColumn()
    products: IProducts[];
    @ManyToOne(() => CompanyEntity, (company) => company.succersale, {
        onDelete: 'SET NULL',
        cascade: true,
        onUpdate: 'CASCADE',
        nullable: true
    })
    @JoinColumn()
    company?: ICompany;

@OneToMany(()=>DepositEntity,(deposit)=>deposit.succursale)
deposit?: IDeposit[];
}