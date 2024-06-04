import { IBaseEntityModel, IDeposit, ISupplier } from ".";
import { ISupplyDetails } from "./supply-details.model";

export interface  ISupply extends IBaseEntityModel{
    date_entre:Date;
    supplier?:ISupplier
    deposit?:IDeposit
    supply_details?:ISupplyDetails

} 