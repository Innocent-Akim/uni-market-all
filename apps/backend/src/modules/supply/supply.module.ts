import { Module } from '@nestjs/common';
import { SupplyService } from './service/supply.service';
import { SupplyController } from './controller/supply.controller';
import { RouterModule } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SupplyEntity } from './entities/supply.entity';

@Module({
  imports:[
    RouterModule.register([{
      path:'/supply',
      module:SupplyModule
    }]),
    TypeOrmModule.forFeature([SupplyEntity])
  ],
  controllers: [SupplyController],
  providers: [SupplyService]
})
export class SupplyModule {}
