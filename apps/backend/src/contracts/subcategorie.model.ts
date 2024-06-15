import { ICategorie } from '@uni/modules/categories/interfaces/icategories';
import {IBaseEntityModel} from '.'

export interface ISubcategorie extends IBaseEntityModel{
    designation:string;
    categorie:ICategorie

}