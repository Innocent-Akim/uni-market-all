import { Module } from '@nestjs/common';
import { InvoiceDetailsController } from './controller/invoice.details.controller';
import { InvoiceDetailsService } from './service/invoice.details.service';
import { RouterModule } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvoiceDetailsEntity } from './entities/invoice.details.entity';

@Module({
  imports:[
    RouterModule.register([{
      path:'/invoice-details',
      module:InvoiceDetailsModule
    }]),
    TypeOrmModule.forFeature([InvoiceDetailsEntity])
  ],
  controllers: [InvoiceDetailsController],
  providers: [InvoiceDetailsService],
  exports:[InvoiceDetailsService]

})
export class InvoiceDetailsModule {}
