import { Body, Controller, Post } from '@nestjs/common';
import { CrudController } from '@uni/crud';
import { DepositEntity } from '../entities/deposit.entity';
import { DepositService } from '../service/deposit.service';
import { DepositDto } from '../dto/deposit.dto';

@Controller()
export class DepositController extends CrudController<DepositEntity> {
    constructor(
        private depositService:DepositService
    ){
        super(depositService)
    }
     
    @Post()
    async createDeposit(@Body() deposit:DepositDto):Promise<DepositEntity>{
        return this.depositService.createDeposit(deposit);
    }
}
