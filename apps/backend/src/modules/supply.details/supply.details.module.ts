import { Module } from '@nestjs/common';
import { SupplyDetailsController } from './controller/supply.details.controller';
import { SupplyDetailsService } from './service/supply.details.service';
import { RouterModule } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SupplyDetailsEntity } from './entities/supply.details.entity';

@Module({
  imports:[
    RouterModule.register(
      [
        {path:'supply-details',module:SupplyDetailsModule},
      ]
    ),
    TypeOrmModule.forFeature([SupplyDetailsEntity])
  ],
  controllers: [SupplyDetailsController],
  providers: [SupplyDetailsService]
})
export class SupplyDetailsModule {}
