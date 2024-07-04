import { HttpStatus, Injectable } from '@nestjs/common';
import { CrudService } from '@uni/crud';
import { ProductsEntity } from '../entities/products.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmProductRepository } from '../repository/type-orm-products';
import { RequestContext } from '@uni/context';
import { ProductDto } from '../dto/product.dto';
import { AppHelpers } from '@uni/helpers/app.helpers';

@Injectable()
export class ProductsService extends CrudService<ProductsEntity> {
    constructor(
        @InjectRepository(ProductsEntity)
        typeOrmProductRepository: TypeOrmProductRepository,
        private readonly appHelpers: AppHelpers
    ) {
        super(typeOrmProductRepository)
    }


    async createProducts(products: ProductDto): Promise<ProductsEntity> {
        const companyId: any = RequestContext.currentCompanyId();
        const { designation } = products
        const reponse = await this.typeOrmRepository.createQueryBuilder('products').where('products.companyId = :companyId', {
            companyId,
        }).andWhere('products.designation = :designation', {
            designation
        }).getMany();

        if (reponse?.length>0) {
            await this.appHelpers.handleException(HttpStatus.CONFLICT);
        }
        return await this.typeOrmRepository.save({ ...products, company: companyId });
    }

    async findProducts(): Promise<ProductsEntity[]> {
        const companyId: any = RequestContext.currentCompanyId();
        return await this.typeOrmRepository.createQueryBuilder('products').where('products.companyId= :companyId', {
            companyId
        }).getMany();
    }
}
