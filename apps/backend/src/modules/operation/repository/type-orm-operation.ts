import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OperationEntity } from '../entities/operation.entity';


@Injectable()
export class TypeOrmOperationRepository extends Repository<OperationEntity> {
    constructor(@InjectRepository(OperationEntity) readonly repository: Repository<OperationEntity>) {
        super(repository.target, repository.manager, repository.queryRunner);
    }
}