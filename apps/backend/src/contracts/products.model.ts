import { IBaseCompanyEntity, IBaseSuccursale, IDepositSocks, IImages, IInvoiceDetails, ISheetDeposit, ISheetStore, IStoreStocks, ISubcategorie, ISupplyDetails } from ".";


export interface IProducts extends IBaseCompanyEntity {
    designation: string;
    forme: string;
    qteAlerte: number;
    pugros: number;
    pudetail: number;
    stock_store?: IStoreStocks[]
    stock_deposit?: IDepositSocks[]
    invoice_details?: IInvoiceDetails[]
    supply_details?: ISupplyDetails[]
    subcategorie?: ISubcategorie;
    sheet_store?: ISheetStore[]
    sheet_deposit?: ISheetDeposit[]
    image:IImages[]

}