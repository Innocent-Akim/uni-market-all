import { Injectable } from '@nestjs/common';
import { CrudService } from '@uni/crud';
import { DepositStockEntity } from '../entities/depot-stock.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmDepositStockRepository } from '../repository/type-orm-deposit-stock';

@Injectable()
export class DepositStockService extends CrudService<DepositStockEntity> {
    constructor(
        @InjectRepository(DepositStockEntity)
        typeOrmDepositStockRepository:TypeOrmDepositStockRepository
    ){super(typeOrmDepositStockRepository)}
}
