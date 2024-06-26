import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CrudService } from '@uni/crud';
import { InvoiceDetailsEntity } from '@uni/modules/invoice.details/entities/invoice.details.entity';
import { InvoiceHeaderEntity } from '../entities/invoice.header.entity';
import { TypeOrmInvoiceHeaderRepository } from '../repository/type-orm-invoive.header';

@Injectable()
export class InvoiceHeaderService extends CrudService<InvoiceHeaderEntity> {
    constructor(
        @InjectRepository(InvoiceHeaderEntity)
        typeOrmInvoiceHeaderRepository:TypeOrmInvoiceHeaderRepository
    ){super(typeOrmInvoiceHeaderRepository)}
}
