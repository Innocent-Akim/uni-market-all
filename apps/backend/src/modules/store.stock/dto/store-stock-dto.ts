import { IProducts, IStore } from "@uni/contracts";

export class StoreStockDto{
    qte: number;

    qteAlerte: number;

    storeId:IStore['id']

    productId:IProducts['id']
}