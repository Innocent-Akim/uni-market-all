import { Controller } from '@nestjs/common';
import { CrudController } from '@uni/crud';
import { PaymentEntity } from '../entities/payment.entity';
import { PaymentService } from '../service/payment.service';

@Controller()
export class PaymentController extends CrudController<PaymentEntity> {
    constructor(
       private readonly payementService:PaymentService
    ){
        super(payementService)
    }
}
