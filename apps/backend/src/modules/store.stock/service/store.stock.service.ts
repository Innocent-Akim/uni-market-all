import { Injectable } from '@nestjs/common';
import { CrudService } from '@uni/crud';
import { StoreStockEntity } from '../entities/store.stock.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmStoreStockRepository } from '../repository/type-orm-store-stock';

@Injectable()
export class StoreStockService extends CrudService<StoreStockEntity> {
    constructor(@InjectRepository(StoreStockEntity)
    typeOrmStoreStockRepository:TypeOrmStoreStockRepository
){super(typeOrmStoreStockRepository)}
}
