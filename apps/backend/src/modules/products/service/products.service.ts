import { Injectable } from '@nestjs/common';
import { CrudService } from '@uni/crud';
import { ProductsEntity } from '../entities/products.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmProductRepository } from '../repository/type-orm-products';
import { RequestContext } from '@uni/context';
import { ProductDto } from '../dto/product.dto';

@Injectable()
export class ProductsService extends CrudService<ProductsEntity> {
    constructor(
        @InjectRepository(ProductsEntity)
        typeOrmProductRepository:TypeOrmProductRepository
    ){
        super(typeOrmProductRepository)
    }


    async createProducts(products:ProductDto):Promise<ProductsEntity>{
        const companyId:any=RequestContext.currentCompanyId();
        return  await this.typeOrmRepository.save({...products, company:companyId});
    }

    async findProducts():Promise<ProductsEntity[]>{
        const companyId:any=RequestContext.currentCompanyId();
        return  await this.typeOrmRepository.createQueryBuilder('products').where('products.companyId= :companyId',{
            companyId
        }).getMany();
    }
}
