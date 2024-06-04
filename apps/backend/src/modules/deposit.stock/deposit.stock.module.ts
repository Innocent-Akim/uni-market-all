import { Module } from '@nestjs/common';
import { DepositStockService } from './service/deposit.stock.service';
import { DepositStockController } from './controller/deposit.stock.controller';

@Module({
  providers: [DepositStockService],
  controllers: [DepositStockController]
})
export class DepositStockModule {}
