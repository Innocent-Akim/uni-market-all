import { Module } from '@nestjs/common';
import { PaymentController } from './controller/payment.controller';
import { PaymentService } from './service/payment.service';
import { RouterModule } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentEntity } from './entities/payment.entity';

@Module({
  imports:[
    RouterModule.register([{path:'payement',module:PaymentModule}]),
    TypeOrmModule.forFeature([PaymentEntity])
  ],
  controllers: [PaymentController],
  providers: [PaymentService]
})
export class PaymentModule {}
