import { Module } from '@nestjs/common';
import { InvoiceHeaderController } from './controller/invoice.header.controller';
import { InvoiceHeaderService } from './service/invoice.header.service';

@Module({
  controllers: [InvoiceHeaderController],
  providers: [InvoiceHeaderService]
})
export class InvoiceHeaderModule {}
