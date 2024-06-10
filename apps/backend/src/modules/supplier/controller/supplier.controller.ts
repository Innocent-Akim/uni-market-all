import { Controller } from '@nestjs/common';
import { CrudController } from '@uni/crud';
import { SupplierEntity } from '../entities/supplier.entity';
import { SupplierService } from '../service/supplier.service';

@Controller()
export class SupplierController extends CrudController<SupplierEntity> {
    constructor(private supplierService: SupplierService) { super(supplierService) }
}
