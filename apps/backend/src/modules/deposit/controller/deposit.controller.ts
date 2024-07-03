import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CrudController } from '@uni/crud';
import { DepositEntity } from '../entities/deposit.entity';
import { DepositService } from '../service/deposit.service';
import { DepositDto } from '../dto/deposit.dto';
import { AuthGuard } from '@uni/modules/auth/guards/auth.guard';

@Controller()
export class DepositController extends CrudController<DepositEntity> {
    constructor(
        private depositService:DepositService
    ){
        super(depositService)
    }
     @UseGuards(AuthGuard)
    @Post()
    async createDeposit(@Body() deposit:DepositDto):Promise<DepositEntity>{
        return this.depositService.createDeposit(deposit);
    }

    @UseGuards(AuthGuard)
    @Get()
    async findDeposit():Promise<DepositEntity[]>{
        return await this.depositService.findDepot();
    }
}
