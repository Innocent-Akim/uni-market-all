import { IDeposit, IStockSheet } from ".";

export interface ISheetDeposit extends IStockSheet{
    deposit?:IDeposit
}