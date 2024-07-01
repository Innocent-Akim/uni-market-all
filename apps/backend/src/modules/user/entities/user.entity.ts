import { ICompany, IDeposit, IStore, ISuccursal, IUser } from "@uni/contracts";
import { IBaseEntity } from "@uni/entities";
import { DepositEntity } from "@uni/modules/deposit/entities/deposit.entity";
import { Column, Entity, ManyToOne } from "typeorm";

@Entity({ name: 'users' })
export class UserEntity extends IBaseEntity implements IUser {
    @Column()
    name: string;

    @Column()
    email: string;
    
    @Column({nullable:true})
    phone?: string;

    @Column()
    password: string;

    @Column({ nullable: true })
    emailVerified: Date;

    @Column({ nullable: true })
    image: string;

    @Column({ nullable: true })
    refreshToken: string;


    @Column({ nullable: true })
    refreshTokenExpiration?: Date;


    @Column({ nullable: true })
    Lastaccess?: string;

    @Column({ nullable: true })
    lastLogin?: Date;
    

    company?: ICompany;

    succursale?: ISuccursal;
    
    @ManyToOne(()=>DepositEntity,(deposit)=>deposit.user,{
        nullable:true
    })
    deposit?: IDeposit;

    store?: IStore;
}