import { IImages, IProducts } from "@uni/contracts";
import { IBaseEntity } from "@uni/entities";
import { ProductsEntity } from "@uni/modules/products/entities/products.entity";
import { Column, Entity, ManyToOne } from "typeorm";

@Entity({name:'images'})
export class ImageEntity extends IBaseEntity implements IImages{

    @Column()
    imagePath: string;

    @Column({default:false, nullable:false})
    default: boolean;

   @ManyToOne(()=>ProductsEntity,(product)=>product.image,{
    nullable:false
   })
    product: IProducts;
}