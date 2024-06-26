import { Module } from '@nestjs/common';
import { InvoiceHeaderController } from './controller/invoice.header.controller';
import { InvoiceHeaderService } from './service/invoice.header.service';
import { RouterModule } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvoiceDetailsEntity } from '../invoice.details/entities/invoice.details.entity';

@Module({
  imports:[
    RouterModule.register([
      {
        path:'/invoice.header',
        module:InvoiceHeaderModule
      }
    ]),
    TypeOrmModule.forFeature([InvoiceDetailsEntity])
  ],
  controllers: [InvoiceHeaderController],
  providers: [InvoiceHeaderService]
})
export class InvoiceHeaderModule {}
