import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { InvoiceHeaderEntity } from "../entities/invoice.header.entity";

@Injectable()
export class TypeOrmInvoiceHeaderRepository extends Repository<InvoiceHeaderEntity> {
    constructor(@InjectRepository(InvoiceHeaderEntity) readonly repository: Repository<InvoiceHeaderEntity>) {
        super(repository.target, repository.manager, repository.queryRunner);
    }
}