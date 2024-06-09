import { Module } from '@nestjs/common';
import { DepositController } from './controller/deposit.controller';
import { DepositService } from './service/deposit.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepositEntity } from './entities/deposit.entity';
import { RouterModule } from '@nestjs/core';

@Module({
  imports:[
    RouterModule.register([{path:'deposit',module:DepositModule}]),
    TypeOrmModule.forFeature([DepositEntity])
  ],
  controllers: [DepositController],
  providers: [DepositService]
})
export class DepositModule {}
