import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductsEntity } from '../entities/products.entity';


@Injectable()
export class TypeOrmProductRepository extends Repository<ProductsEntity> {
    constructor(@InjectRepository(ProductsEntity) readonly repository: Repository<ProductsEntity>) {
        super(repository.target, repository.manager, repository.queryRunner);
    }
}