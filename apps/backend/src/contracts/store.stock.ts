import {  IBaseProduct } from "./base-entity.model";
import { IProducts } from "./products.model";
import { IStore } from "./store.model";

export interface IStoreStocks extends IBaseProduct{
    qte:number;
    qteAlerte:number;
    store?:IStore;
    product?:IProducts
}