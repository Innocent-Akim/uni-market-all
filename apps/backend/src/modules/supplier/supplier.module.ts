import { Module } from '@nestjs/common';
import { SupplierController } from './controller/supplier.controller';
import { SupplierService } from './service/supplier.service';
import { RouterModule } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SupplierEntity } from './entities/supplier.entity';

@Module({
  imports: [
    RouterModule.register([{ path: '/supplier', module: SupplierModule }]),
    TypeOrmModule.forFeature([SupplierEntity])
  ],
  controllers: [SupplierController],
  providers: [SupplierService]
})

export class SupplierModule { }
