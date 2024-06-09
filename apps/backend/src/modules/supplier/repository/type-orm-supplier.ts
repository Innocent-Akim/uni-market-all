import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SupplierEntity } from '../entities/supplier.entity';


@Injectable()
export class TypeOrmSupplierRepository extends Repository<SupplierEntity> {
    constructor(@InjectRepository(SupplierEntity) readonly repository: Repository<SupplierEntity>) {
        super(repository.target, repository.manager, repository.queryRunner);
    }
}