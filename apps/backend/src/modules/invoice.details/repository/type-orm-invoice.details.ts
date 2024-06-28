import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { InvoiceDetailsEntity } from "../entities/invoice.details.entity";

@Injectable()
export class TypeOrmInvoiceDetailsRepository extends Repository<InvoiceDetailsEntity> {
    constructor(@InjectRepository(InvoiceDetailsEntity) readonly repository: Repository<InvoiceDetailsEntity>) {
        super(repository.target, repository.manager, repository.queryRunner);
    }
}