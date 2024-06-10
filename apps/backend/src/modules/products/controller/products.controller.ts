import { Controller } from '@nestjs/common';
import { CrudController } from '@uni/crud';
import { ProductsEntity } from '../entities/products.entity';
import { ProductsService } from '../service/products.service';

@Controller()
export class ProductsController extends CrudController<ProductsEntity> {
    constructor(
        private readonly productService:ProductsService
    ){
        super(productService)
    }
}
