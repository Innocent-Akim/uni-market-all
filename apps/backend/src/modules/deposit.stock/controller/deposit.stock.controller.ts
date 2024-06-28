import { Controller } from '@nestjs/common';
import { CrudController } from '@uni/crud';
import { DepositStockEntity } from '../entities/depot-stock.entity';
import { DepositStockService } from '../service/deposit.stock.service';

@Controller()
export class DepositStockController extends CrudController<DepositStockEntity> {
    constructor(private readonly depositStockService:DepositStockService){super(depositStockService)}
}
