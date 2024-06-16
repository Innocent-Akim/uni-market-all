import { IBaseEntityModel } from "./base-entity.model";
import { IProducts } from "./products.model";

export interface IImages extends IBaseEntityModel{
    imagePath:string
    default:boolean
    product:IProducts
}