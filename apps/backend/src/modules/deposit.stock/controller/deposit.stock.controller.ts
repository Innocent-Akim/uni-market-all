import { Controller } from '@nestjs/common';
import { CrudController } from '@uni/crud';
import { DepositStockEntity } from '../entities/depot-stock.entity';

@Controller()
export class DepositStockController extends CrudController<DepositStockEntity> {}
