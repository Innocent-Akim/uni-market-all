import { Module } from '@nestjs/common';
import { OperationController } from './controller/operation.controller';
import { OperationService } from './service/operation.service';
import { RouterModule } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OperationEntity } from './entities/operation.entity';
import { AppHelpers } from '@uni/helpers/app.helpers';

@Module({
  imports:[
    RouterModule.register([{path:'/operation',module:OperationModule}]),
    TypeOrmModule.forFeature([OperationEntity])
  ],
  controllers: [OperationController],
  providers: [OperationService,AppHelpers]
})
export class OperationModule {}
