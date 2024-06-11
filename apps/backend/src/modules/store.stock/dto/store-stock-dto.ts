import { IProducts, IStore } from "@uni/contracts";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class StoreStockDto{
    @IsNotEmpty()
    @IsNumber()
    qte: number;
    
    @IsNotEmpty()
    @IsNumber()
    qteAlerte: number;

    @IsNotEmpty()
    @IsString()
    storeId:IStore['id']
    
    @IsNotEmpty()
    @IsString()
    productId:IProducts['id']
}