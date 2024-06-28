import { Controller } from '@nestjs/common';
import { CrudController } from '@uni/crud';
import { InvoiceDetailsEntity } from '../entities/invoice.details.entity';
import { InvoiceHeaderService } from '@uni/modules/invoice.header/service/invoice.header.service';
import { InvoiceDetailsService } from '../service/invoice.details.service';

@Controller()
export class InvoiceDetailsController extends CrudController<InvoiceDetailsEntity> {
    constructor(
        invoiceDetailService:InvoiceDetailsService
    ){ super(invoiceDetailService) }
}


