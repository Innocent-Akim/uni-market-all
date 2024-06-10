import { Controller } from '@nestjs/common';
import { CrudController } from '@uni/crud';
import { StoreStockEntity } from '../entities/store.stock.entity';
import { StoreStockService } from '../service/store.stock.service';

@Controller()
export class StoreStockController extends CrudController<StoreStockEntity> {
    constructor(storeStockService:StoreStockService){super(storeStockService)}
}
