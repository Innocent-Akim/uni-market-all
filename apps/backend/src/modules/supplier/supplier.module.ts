import { Module } from '@nestjs/common';
import { SupplierController } from './controller/supplier.controller';
import { SupplierService } from './service/supplier.service';

@Module({
  controllers: [SupplierController],
  providers: [SupplierService]
})
export class SupplierModule {}
