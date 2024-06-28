import { Controller } from '@nestjs/common';
import { CrudController } from '@uni/crud';
import { InvoiceHeaderEntity } from '../entities/invoice.header.entity';
import { InvoiceHeaderService } from '../service/invoice.header.service';

@Controller()
export class InvoiceHeaderController extends CrudController<InvoiceHeaderEntity> {
    constructor(invoiceHeaderService:InvoiceHeaderService){super(invoiceHeaderService)}
}
