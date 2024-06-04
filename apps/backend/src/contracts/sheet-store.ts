import { IStockSheet, IStore } from ".";

export interface ISheetStore extends IStockSheet{
    store:IStore
}