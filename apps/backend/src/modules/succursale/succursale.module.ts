import { Module } from '@nestjs/common';
import { SuccursaleController } from './controller/succursale.controller';
import { SuccursaleService } from './service/succursale.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SuccursaleEntity } from './entities/succursale.entity';
import { RouterModule } from '@nestjs/core';

@Module({
  imports:[
    RouterModule.register([
      {
        path:'/succursale',
        module:SuccursaleModule
      }
    ]
    ),
    TypeOrmModule.forFeature([SuccursaleEntity])
  ],

  controllers: [SuccursaleController],
  providers: [SuccursaleService]
})
export class SuccursaleModule {}
