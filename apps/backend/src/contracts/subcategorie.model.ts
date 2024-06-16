import { ICategorie } from '@uni/modules/categories/interfaces/icategories';
import {IBaseEntityModel, IProducts} from '.'

export interface ISubcategorie extends IBaseEntityModel{
    designation:string;
    categorie:ICategorie,
    product?: IProducts[];

}