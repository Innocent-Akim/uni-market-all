import { Module } from '@nestjs/common';
import { DepositStockService } from './service/deposit.stock.service';
import { DepositStockController } from './controller/deposit.stock.controller';
import { RouterModule } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepositStockEntity } from './entities/depot-stock.entity';

@Module({
  imports:[
    RouterModule.register([{path:'deposit-stock',module:DepositStockModule}]),
    TypeOrmModule.forFeature([DepositStockEntity])
  ],
  providers: [DepositStockService],
  controllers: [DepositStockController]
})
export class DepositStockModule {}
