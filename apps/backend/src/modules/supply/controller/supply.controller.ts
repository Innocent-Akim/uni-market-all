import { Controller } from '@nestjs/common';
import { CrudController } from '@uni/crud';
import { SupplyEntity } from '../entities/supply.entity';
import { SupplyService } from '../service/supply.service';

@Controller()
export class SupplyController extends CrudController<SupplyEntity> {
    constructor(
    private readonly    supplyService:SupplyService
    ){super(supplyService)}
}
