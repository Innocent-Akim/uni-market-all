import { Injectable } from '@nestjs/common';
import { CrudService } from '@uni/crud';
import { StoreEntity } from '../entities/store.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmStoreRepository } from '../repository/type-orm-store';
import { StoreDto } from '../dto/store-dto';
import { RequestContext } from '@uni/context';

@Injectable()
export class StoreService extends CrudService<StoreEntity> {
    constructor(
        @InjectRepository(StoreEntity)
        typeOrmStoreRepository: TypeOrmStoreRepository) { super(typeOrmStoreRepository) }

    async createStore(store: StoreDto): Promise<StoreEntity> {
        const depositId: any = RequestContext.currentDepositId();
        const response = await this.typeOrmRepository.save({ ...store, deposit: depositId });
        return response;
    }

    async findStore(): Promise<StoreEntity[]> {
        const depositId = RequestContext.currentDepositId();
        const response = await this.typeOrmRepository.createQueryBuilder('stores').where('stores.depositId= :depositId', {
            depositId
        }).getMany();
        return response;
    }
}
