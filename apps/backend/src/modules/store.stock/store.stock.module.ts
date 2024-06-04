import { Module } from '@nestjs/common';
import { StoreStockService } from './service/store.stock.service';
import { StoreStockController } from './controller/store.stock.controller';

@Module({
  providers: [StoreStockService],
  controllers: [StoreStockController]
})
export class StoreStockModule {}
