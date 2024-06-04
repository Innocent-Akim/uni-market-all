import { IBaseDeposit } from "./base-entity.model";
import { ISheetStore } from "./sheet-store";
import { IStoreStocks } from "./store.stock";

export interface IStore extends IBaseDeposit{
    designation:string;
    adresse:string;
    phone:string;
    mail:string; 
    stock_store?:IStoreStocks[];
    sheet_store?:ISheetStore[];
    
}