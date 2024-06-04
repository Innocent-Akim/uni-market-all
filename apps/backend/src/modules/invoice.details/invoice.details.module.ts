import { Module } from '@nestjs/common';
import { InvoiceDetailsController } from './controller/invoice.details.controller';
import { InvoiceDetailsService } from './service/invoice.details.service';

@Module({
  controllers: [InvoiceDetailsController],
  providers: [InvoiceDetailsService]
})
export class InvoiceDetailsModule {}
