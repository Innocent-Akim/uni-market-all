import { Injectable } from '@nestjs/common';
import { CrudService } from '@uni/crud';
import { SupplyEntity } from '../entities/supply.entity';
import { TypeOrmSupplyRepository } from '../repository/type-orm-supply';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SupplyService extends CrudService<SupplyEntity> {
    constructor(
        @InjectRepository(SupplyEntity)
        typeOrmSupplyRepository:TypeOrmSupplyRepository
    ){super(typeOrmSupplyRepository)}
}
