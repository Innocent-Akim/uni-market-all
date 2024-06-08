import { Module } from '@nestjs/common';
import { CompanyController } from './controller/company.controller';
import { CompanyService } from './service/company.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyEntity } from './entities/company.entity';
import { RouterModule } from '@nestjs/core';
import { CommandBus } from '@nestjs/cqrs';

@Module({
imports:[
  RouterModule.register([{ path: '/company', module: CompanyModule }]),
  TypeOrmModule.forFeature([CompanyEntity]),
],
  controllers: [CompanyController],
  providers: [CompanyService,CommandBus]
})
export class CompanyModule {}
