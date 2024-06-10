import { Injectable } from '@nestjs/common';
import { CrudService } from '@uni/crud';
import { ProductsEntity } from '../entities/products.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmProductRepository } from '../repository/type-orm-products';

@Injectable()
export class ProductsService extends CrudService<ProductsEntity> {
    constructor(
        @InjectRepository(ProductsEntity)
        typeOrmProductRepository:TypeOrmProductRepository
    ){
        super(typeOrmProductRepository)
    }
}
