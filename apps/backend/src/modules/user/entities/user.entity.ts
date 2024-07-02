import { ICompany, IDeposit, IStore, ISuccursal, IUser } from "@uni/contracts";
import { IBaseEntity } from "@uni/entities";
import { CompanyEntity } from "@uni/modules/company/entities/company.entity";
import { DepositEntity } from "@uni/modules/deposit/entities/deposit.entity";
import { StoreEntity } from "@uni/modules/store/entities/store.entity";
import { SuccursaleEntity } from "@uni/modules/succursale/entities/succursale.entity";
import { Column, Entity, ManyToOne, RelationId } from "typeorm";

@Entity({ name: 'users' })
export class UserEntity extends IBaseEntity implements IUser {
    @Column()
    name: string;

    @Column()
    email: string;

    @Column({ nullable: true })
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

    @ManyToOne(()=>CompanyEntity,(company)=>company.user,{
        nullable:true
    })
    company?: ICompany;

    @ManyToOne(() => SuccursaleEntity, (succursale) => succursale.user, {
        nullable: true
    })
    succursale?: ISuccursal;

    @ManyToOne(() => DepositEntity, (deposit) => deposit.user, {
        nullable: true
    })
    deposit?: IDeposit;

    @ManyToOne(() => StoreEntity, (store) => store.user, {
        nullable: true
    })
    store?: IStore;
     
    @RelationId((t:UserEntity)=>t.store)
    storeId?: IStore['id'];

    @RelationId((t:UserEntity)=>t.deposit)
    depositId?: IDeposit['id'];

    @RelationId((t:UserEntity)=>t.succursale)
    succursaleId?: ISuccursal['id'];

    @RelationId((t:UserEntity)=>t.company)
    companyId?: ICompany['id'];
}