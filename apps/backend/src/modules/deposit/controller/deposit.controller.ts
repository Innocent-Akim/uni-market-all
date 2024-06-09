import { Controller } from '@nestjs/common';
import { CrudController } from '@uni/crud';
import { DepositEntity } from '../entities/deposit.entity';
import { DepositService } from '../service/deposit.service';

@Controller('deposit')
export class DepositController extends CrudController<DepositEntity> {
    constructor(
        private depositService:DepositService
    ){
        super(depositService)
    }
}
