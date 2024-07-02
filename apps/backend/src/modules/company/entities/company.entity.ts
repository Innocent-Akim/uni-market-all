import { ICar, ICustom, ISupplier, IUser } from "@uni/contracts";
import { ICompany } from "@uni/contracts/company.model";
import { ISuccursal } from "@uni/contracts/succursal.model";
import { IBaseEntity } from "@uni/entities";
import { CarEntity } from "@uni/modules/car/entities/car.entity";
import { CategoriesEntity } from "@uni/modules/categories/entities/categorie.entity";
import { ICategorie } from "@uni/modules/categories/interfaces/icategories";
import { CustomEntity } from "@uni/modules/custom/entities/custom.entity";
import { SupplierEntity } from "@uni/modules/supplier/entities/supplier.entity";
import { UserEntity } from "@uni/modules/user/entities/user.entity";
import { Column, Entity, OneToMany } from "typeorm";
@Entity({ name: 'companys' })
export class CompanyEntity extends IBaseEntity implements ICompany {

  @Column()
  name: string;

  @Column({ nullable: true })
  phone?: string;

  @Column({ nullable: true })
  email?: string;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  isDefault: boolean;

  @Column({ nullable: true })
  valueDate?: Date;

  @Column()
  status?: string;

  @Column({ nullable: true })
  overview: string;

  @Column()
  totalEmployees: number;

  @Column({ nullable: true })
  timeZone?: string;

  @Column({ nullable: true })
  imageUrl?: string;

  @OneToMany(() => CompanyEntity, (company) => company.succersale)
  succersale?: ISuccursal[];

  @OneToMany(() => CustomEntity, (custom) => custom.company, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  custom?: ICustom[];

  @OneToMany(() => SupplierEntity, (supplier) => supplier.company, {
    onDelete: "CASCADE",
    onUpdate: 'CASCADE'
  })
  supplier?: ISupplier[];

  @OneToMany(() => CategoriesEntity, (categorie) => categorie.company)
  categorie?: ICategorie[];

  @OneToMany(() => CarEntity, (car) => car.company)
  car?: ICar[];

  @OneToMany(() => UserEntity, (user) => user.company, {
    nullable: true
  })
  user?: IUser[];

}