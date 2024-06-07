import { Module } from '@nestjs/common';
import { CompanyController } from './controller/company.controller';
import { CompanyService } from './service/company.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyEntity } from './entities/company.entity';
import { RouterModule } from '@nestjs/core';

@Module({
imports:[
  // RouterModule.register([{ path: '/invoices', module: InvoiceModule }]),

  TypeOrmModule.forFeature([CompanyEntity]),
],
  controllers: [CompanyController],
  providers: [CompanyService]
})
export class CompanyModule {}
