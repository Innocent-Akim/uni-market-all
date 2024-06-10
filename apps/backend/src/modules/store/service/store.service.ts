import { Injectable } from '@nestjs/common';
import { CrudService } from '@uni/crud';
import { StoreEntity } from '../entities/store.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmStoreRepository } from '../repository/type-orm-store';

@Injectable()
export class StoreService extends CrudService<StoreEntity> {
    constructor(
        @InjectRepository(StoreEntity) 
        typeOrmStoreRepository:TypeOrmStoreRepository){super(typeOrmStoreRepository)}
}
