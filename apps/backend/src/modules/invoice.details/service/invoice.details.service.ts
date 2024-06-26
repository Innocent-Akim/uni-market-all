import { Injectable } from '@nestjs/common';
import { CrudService } from '@uni/crud';
import { InvoiceDetailsEntity } from '../entities/invoice.details.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmInvoiceDetailsRepository } from '../repository/type-orm-invoice.details';

@Injectable()
export class InvoiceDetailsService extends CrudService<InvoiceDetailsEntity> {
    constructor(
        @InjectRepository(InvoiceDetailsEntity)
        typeOrmInvoiceDetailsRepository:TypeOrmInvoiceDetailsRepository
    ){
        super(typeOrmInvoiceDetailsRepository)
    }
}
