import { Injectable } from '@nestjs/common';
import { CrudService } from '@uni/crud';
import { DepositEntity } from '../entities/deposit.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmDeposit } from '../repository/type-orm-deposit';
import { DepositDto } from '../dto/deposit.dto';

@Injectable()
export class DepositService extends CrudService<DepositEntity> {
    constructor(
        @InjectRepository(DepositEntity)
         typeOrmDeposit:TypeOrmDeposit
    ){
        super(typeOrmDeposit)
    }

    
    async createDeposit(deposit:DepositDto):Promise<DepositEntity>{
        const responsive=await this.create(deposit);
        return responsive
    }
}
