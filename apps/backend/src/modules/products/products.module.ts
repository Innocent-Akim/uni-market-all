import { Module } from '@nestjs/common';
import { ProductsController } from './controller/products.controller';
import { ProductsService } from './service/products.service';
import { RouterModule } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsEntity } from './entities/products.entity';

@Module({
  imports:[
    RouterModule.register([{path:'products',module:ProductsModule}]),
    TypeOrmModule.forFeature([ProductsEntity])
  ],
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule {}
