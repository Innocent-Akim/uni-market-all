import { IOperation } from "@uni/contracts";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
@Entity({name:'operations'})
export class OperationEntity implements IOperation {
    @PrimaryGeneratedColumn('uuid')
    id?: string;

    @Column()
    amount: number;

    @Column()
    amount_in_full: string;

    @Column({ default: 'USD' })
    devise: string;

    @Column()
    beneficiery: string;

    @Column()
    groupe: string;

    @Column()
    libelle: string;

    @Column()
    wording: string;

    @Column()
    currentDate: Date;

    @Column()
    types: string;

    @Column()
    observation: string;

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
}