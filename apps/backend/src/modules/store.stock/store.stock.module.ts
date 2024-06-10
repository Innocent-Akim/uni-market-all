import { Module } from '@nestjs/common';
import { StoreStockService } from './service/store.stock.service';
import { StoreStockController } from './controller/store.stock.controller';
import { RouterModule } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoreStockEntity } from './entities/store.stock.entity';

@Module({
  imports:[RouterModule.register([{path:'/store-stock', module:StoreStockModule}]),
  TypeOrmModule.forFeature([StoreStockEntity])
],
  providers: [StoreStockService],
  controllers: [StoreStockController]
})
export class StoreStockModule {}
