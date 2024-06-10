import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PaymentEntity } from "../entities/payment.entity";

@Injectable()
export class TypeOrmPaymentRepository extends Repository<PaymentEntity> {
    constructor(@InjectRepository(PaymentEntity) readonly repository: Repository<PaymentEntity>) {
        super(repository.target, repository.manager, repository.queryRunner);
    }
}