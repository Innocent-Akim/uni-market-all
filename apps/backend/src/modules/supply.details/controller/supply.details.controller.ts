import { Controller } from '@nestjs/common';
import { CrudController } from '@uni/crud';
import { SupplyDetailsEntity } from '../entities/supply.details.entity';
import { SupplyDetailsService } from '../service/supply.details.service';

@Controller()
export class SupplyDetailsController extends CrudController<SupplyDetailsEntity> {
    constructor(private readonly supplyDetailsService:SupplyDetailsService){super(supplyDetailsService)}
}
