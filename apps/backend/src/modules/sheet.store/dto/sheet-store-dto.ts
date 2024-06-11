import { IProducts, IStore } from "@uni/contracts";
import { Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsString } from "class-validator";

export class SheetStoreDto{
    
    @IsNotEmpty()
    @Type(()=>Number)
    initial_stock: number;

    @IsNotEmpty()
    @Type(()=>Number)
    out_stock: number;

    @IsNotEmpty()
    @Type(()=>Number)
    in_stock: number;

    @IsNotEmpty()
    @Type(()=>Number)
    end_stock: number;

    @IsNotEmpty()
    @IsDate()
    currentDate: Date;


    @IsNotEmpty()
    @IsString()
    productId:IProducts['id']

    @IsNotEmpty()
    @IsString()
    storeId:IStore['id']

}