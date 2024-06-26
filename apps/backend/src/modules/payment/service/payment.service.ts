import { Injectable } from '@nestjs/common';
import { CrudService } from '@uni/crud';
import { PaymentEntity } from '../entities/payment.entity';
import { TypeOrmPaymentRepository } from '../repository/type-orm-payment';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PaymentService extends CrudService<PaymentEntity> {
    constructor(
        @InjectRepository(PaymentEntity)
        typeOrmPaymentRepository:TypeOrmPaymentRepository
    ){ super(typeOrmPaymentRepository) }
}
