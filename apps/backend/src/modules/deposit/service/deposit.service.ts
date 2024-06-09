import { Injectable } from '@nestjs/common';
import { CrudService } from '@uni/crud';
import { DepositEntity } from '../entities/deposit.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmDeposit } from '../repository/type-orm-deposit';

@Injectable()
export class DepositService extends CrudService<DepositEntity> {
    constructor(
        @InjectRepository(DepositEntity)
         typeOrmDeposit:TypeOrmDeposit
    ){
        super(typeOrmDeposit)
    }
}
