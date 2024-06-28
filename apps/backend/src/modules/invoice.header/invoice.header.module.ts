import { Module } from '@nestjs/common';
import { InvoiceHeaderController } from './controller/invoice.header.controller';
import { InvoiceHeaderService } from './service/invoice.header.service';
import { RouterModule } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvoiceHeaderEntity } from './entities/invoice.header.entity';

@Module({
  imports:[
    RouterModule.register([
      {
        path:'/invoice-header',
        module:InvoiceHeaderModule
      }]),
    TypeOrmModule.forFeature([InvoiceHeaderEntity])
  ],
  controllers: [InvoiceHeaderController],
  providers: [InvoiceHeaderService]
})
export class InvoiceHeaderModule {}
