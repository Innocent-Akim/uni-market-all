import { IProducts, ISubcategorie } from "@uni/contracts";
import { IBaseEntity } from "@uni/entities";
import { CategoriesEntity } from "@uni/modules/categories/entities/categorie.entity";
import { ICategorie } from "@uni/modules/categories/interfaces/icategories";
import { ProductsEntity } from "@uni/modules/products/entities/products.entity";
import { Column, Entity, ManyToOne, OneToMany, RelationId } from "typeorm";

@Entity({ name: 'subcategories' })
export class SubcategorieEntity extends IBaseEntity implements ISubcategorie {
    @Column()
    designation: string;

    @ManyToOne(() => CategoriesEntity, (categorie) => categorie.subcategorie, { nullable: true })
    categorie: ICategorie;

    @RelationId((t: SubcategorieEntity) => t.categorie)
    categorieId: string;

    @OneToMany(() => ProductsEntity, (product) => product.subcategorie, {
        createForeignKeyConstraints: false
    })
    product?: IProducts[];
}