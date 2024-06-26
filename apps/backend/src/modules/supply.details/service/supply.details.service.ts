import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CrudService } from '@uni/crud';
import { SupplyDetailsEntity } from '../entities/supply.details.entity';
import { TypeOrmSupplyDetailsRepository } from '../repository/type-orm-supply.details';

@Injectable()
export class SupplyDetailsService extends CrudService<SupplyDetailsEntity> {
    constructor(
        @InjectRepository(SupplyDetailsEntity)
        typeOrmSupplyDetailsRepository: TypeOrmSupplyDetailsRepository
    ) { super(typeOrmSupplyDetailsRepository) }
}
