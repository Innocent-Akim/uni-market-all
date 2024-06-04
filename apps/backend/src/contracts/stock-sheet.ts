import { IBaseEntityModel, IProducts } from ".";

export interface IStockSheet extends IBaseEntityModel {
    initial_stock: number;
    out_stock: number;
    in_stock: number;
    end_stock: number;
    currentDate:Date;
    product?:IProducts;
}