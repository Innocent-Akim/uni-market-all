import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CrudController } from '@uni/crud';
import { ProductsEntity } from '../entities/products.entity';
import { ProductsService } from '../service/products.service';
import { ProductDto } from '../dto/product.dto';
import { AuthGuard } from '@uni/modules/auth/guards/auth.guard';

@Controller()
export class ProductsController extends CrudController<ProductsEntity> {
    constructor(
        private readonly productService:ProductsService
    ){
        super(productService)
    }
    
    @UseGuards(AuthGuard)
    @Post()
    async createProduct(@Body() products:ProductDto):Promise<ProductsEntity>{
        return this.productService.createProducts(products)
    }

    @UseGuards(AuthGuard)
    @Get()
    async findProduct():Promise<ProductsEntity[]>{
        return this.productService.findProducts()
    }
}
