import { Injectable } from '@nestjs/common';
import { CrudService } from '@uni/crud';
import { OperationEntity } from '../entities/operation.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmOperationRepository } from '../repository/type-orm-operation';

@Injectable()
export class OperationService extends CrudService<OperationEntity> {
    constructor( @InjectRepository(OperationEntity) typeOrmOperationRepository:TypeOrmOperationRepository){
        super(typeOrmOperationRepository)
    }
    
}
