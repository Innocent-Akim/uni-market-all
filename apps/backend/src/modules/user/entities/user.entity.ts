import { ICompany, IUser } from "@uni/contracts";
import { IBaseEntity } from "@uni/entities";
import { Column, Entity } from "typeorm";

@Entity({ name: 'users' })
export class UserEntity extends IBaseEntity implements IUser {
    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    emailVerified: Date;

    @Column()
    image: string;

    @Column()
    refreshToken: string;
    
    @Column()
    lastLogin?: Date;

    company?: ICompany;
}