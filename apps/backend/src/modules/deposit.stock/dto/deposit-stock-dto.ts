import { IDeposit, IProducts } from "@uni/contracts";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class DepositStockDto{
    
    @IsNotEmpty()
    @IsNumber()
    qte: number;

    @IsNotEmpty()
    @IsNumber()
    qteAlerte: number;

    @IsNotEmpty()
    @IsString()
    depositId:IDeposit['id'];
    
    @IsNotEmpty()
    @IsString()
    productId:IProducts['id']
}