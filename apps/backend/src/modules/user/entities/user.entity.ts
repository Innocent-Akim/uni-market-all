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

    @Column({ nullable: true })
    emailVerified: Date;

    @Column({ nullable: true })
    image: string;

    @Column({ nullable: true })
    refreshToken: string;

    @Column({ nullable: true })
    lastLogin?: Date;

    company?: ICompany;
}