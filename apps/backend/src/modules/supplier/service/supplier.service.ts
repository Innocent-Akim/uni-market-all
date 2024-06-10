import { Injectable } from '@nestjs/common';
import { CrudService } from '@uni/crud';
import { SupplierEntity } from '../entities/supplier.entity';
import { TypeOrmSupplierRepository } from '../repository/type-orm-supplier';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SupplierService extends CrudService<SupplierEntity> {
    constructor(@InjectRepository(SupplierEntity) typeOrmSupplierRepository: TypeOrmSupplierRepository) { super(typeOrmSupplierRepository) }
}
